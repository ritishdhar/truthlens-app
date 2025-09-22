
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from "@/components/layout/header";
import { UploadZone } from "@/components/analysis/upload-zone";
import { ResultsPanel } from "@/components/analysis/results-panel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock authentication check. In a real app, you'd use a proper auth provider.
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for an auth session
    const sessionCheck = setTimeout(() => {
      // To test the protected route, we'll default to `false`
      setIsAuthenticated(false); 
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(sessionCheck);
  }, []);

  return { isAuthenticated, isLoading };
};

export default function AnalyzePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShowAuthDialog(true);
    }
  }, [isLoading, isAuthenticated]);

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
                  <UploadZone />
                  <ResultsPanel />
              </div>
          </div>
        </main>
      </div>

      <AlertDialog open={showAuthDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Authentication Required</AlertDialogTitle>
            <AlertDialogDescription>
              You must be logged in to analyze media. Please log in or create an
              account to continue.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" asChild>
                <Link href="/">Cancel</Link>
            </Button>
            <Button asChild>
                <Link href="/login">Log In</Link>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
