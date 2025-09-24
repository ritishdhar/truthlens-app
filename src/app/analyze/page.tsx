
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from "@/components/layout/header";
import { UploadZone } from "@/components/analysis/upload-zone";
import { ResultsPanel } from "@/components/analysis/results-panel";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

// Temporary: analysis is open to all users (no auth)
const useAuth = () => {
  return { isAuthenticated: true, isLoading: false } as const;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://127.0.0.1:8000";

export type Analysis = {
  verdict: string;
  confidence: number;
  inputType: string;
  input: string;
  latencyMs: number;
  signals: { name: string; score: number }[];
};

export default function AnalyzePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Analysis | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'uploaded' | 'error'>('idle');

  // Auth gating disabled; ensure dialog never opens
  useEffect(() => {
    setShowAuthDialog(false);
  }, []);

  const analyzeUrl = async (url: string) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setUploadStatus('uploading');
    setUploadedFile(null);
    try {
      const res = await fetch(`${API_BASE}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const data = await res.json();
      setResult(data.analysis as Analysis);
      setUploadStatus('uploaded');
      toast({ title: "Analysis complete", description: "URL analyzed successfully." });
    } catch (e: any) {
      const msg = e?.message ?? "Failed to analyze URL";
      setError(msg);
      setUploadStatus('error');
      toast({ title: "Analysis failed", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const analyzeFile = async (file: File, onProgress?: (p: number) => void) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setUploadStatus('uploading');
    setUploadedFile(file);
    
    // Reset progress
    if (onProgress) onProgress(0);

    try {
      const form = new FormData();
      form.append("file", file);

      const xhr = new XMLHttpRequest();
      const url = `${API_BASE}/analyze`;

      const resPromise = new Promise<any>((resolve, reject) => {
        xhr.upload.onprogress = (evt) => {
          if (evt.lengthComputable && onProgress) {
            const percent = Math.round((evt.loaded / evt.total) * 100);
            onProgress(percent);
          }
        };
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              try {
                const json = JSON.parse(xhr.responseText);
                resolve(json);
              } catch (err) {
                reject(err);
              }
            } else {
              reject(new Error(`API error ${xhr.status}`));
            }
          }
        };
        xhr.onerror = () => reject(new Error("Network error"));
        xhr.open("POST", url, true);
        xhr.send(form);
      });

      const data = await resPromise;
      setResult(data.analysis as Analysis);
      setUploadStatus('uploaded');
      toast({ title: "Analysis complete", description: `${file.name} uploaded and analyzed.` });
    } catch (e: any) {
      const msg = e?.message ?? "Failed to analyze file";
      setError(msg);
      setUploadStatus('error');
      toast({ title: "Upload failed", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
      if (onProgress) onProgress(0);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <UploadZone 
                    onAnalyzeUrl={analyzeUrl} 
                    onAnalyzeFile={analyzeFile} 
                    loading={loading} 
                    uploadedFile={uploadedFile}
                    uploadStatus={uploadStatus}
                  />
                  <ResultsPanel result={result} loading={loading} error={error} />
              </div>
          </div>
        </main>
      </div>

      {/* Auth dialog disabled (analysis is free) */}
      <AlertDialog open={false}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle></AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
