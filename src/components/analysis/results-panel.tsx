import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan } from "lucide-react";

export function ResultsPanel() {
  return (
    <Card className="glassmorphic">
      <CardHeader>
        <CardTitle>Analysis Results</CardTitle>
        <CardDescription>The AI-powered analysis will appear here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center h-80 text-center text-muted-foreground space-y-4">
            <Scan className="w-16 h-16" />
            <p>Awaiting analysis...</p>
        </div>
      </CardContent>
    </Card>
  );
}
