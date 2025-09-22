import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Layers, BrainCircuit, Smartphone } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Real-Time Analysis",
    description: "Get results in seconds, not minutes. Our system is optimized for speed and accuracy.",
    imageId: "feature-realtime"
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Explainability",
    description: "We don't just give you a verdict, we show you why. Our heatmaps highlight the manipulated regions.",
    imageId: "feature-explainability"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Ensemble Learning",
    description: "Our system uses a combination of multiple AI models for higher accuracy and resilience against new deepfake techniques.",
    imageId: "feature-ensemble"
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile-Friendly UI",
    description: "Access our powerful tool from any device with a clean and intuitive design.",
    imageId: "feature-mobile"
  }
];

export function FeatureShowcaseSection() {
    const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Our App?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our advanced features provide unparalleled accuracy and insight, setting a new standard in deepfake detection.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const image = getImage(feature.imageId);
              return (
                <Card key={feature.title} className="glassmorphic hover:border-primary/50 transition-colors duration-300 flex flex-col">
                  <CardHeader>
                    <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-base text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
