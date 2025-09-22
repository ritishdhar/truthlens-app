import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloud } from "lucide-react";

export function UploadZone() {
  return (
    <Card className="glassmorphic">
      <CardHeader>
        <CardTitle>Analyze Media</CardTitle>
        <CardDescription>Upload a file or paste a URL to scan for deepfakes.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="border-2 border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center text-center">
          <UploadCloud className="w-12 h-12 text-muted-foreground" />
          <p className="mt-4 text-muted-foreground">Drag & drop files here or click to browse</p>
          <Button variant="outline" className="mt-4">Browse Files</Button>
        </div>
        <div className="flex items-center space-x-2">
            <div className="flex-grow border-t border-border"></div>
            <span className="text-muted-foreground text-xs">OR</span>
            <div className="flex-grow border-t border-border"></div>
        </div>
        <div className="space-y-2">
            <Input placeholder="Paste image or video URL" />
            <Button className="w-full">Analyze URL</Button>
        </div>
      </CardContent>
    </Card>
  );
}
