import { Header } from "@/components/layout/header";
import { UploadZone } from "@/components/analysis/upload-zone";
import { ResultsPanel } from "@/components/analysis/results-panel";

export default function AnalyzePage() {
  return (
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
  );
}
