import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud, BrainCircuit, FileCheck } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="w-12 h-12 text-primary" />,
    title: "Step 1: Upload",
    text: "Easily upload any suspicious video, image, or audio file from your device or paste a URL."
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-primary" />,
    title: "Step 2: Analyze",
    text: "Our AI runs a real-time analysis, scanning for manipulation markers invisible to the naked eye."
  },
  {
    icon: <FileCheck className="w-12 h-12 text-primary" />,
    title: "Step 3: Verdict",
    text: "Receive a clear verdict with a confidence score and a visual heatmap showing manipulated areas."
  }
];

export function HowItWorksSection() {
  return (
    <section className="bg-background/80 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Solution</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Fight Back
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our three-step process makes sophisticated deepfake detection simple and accessible for everyone.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 mb-6 ring-2 ring-primary/20">
                    {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
