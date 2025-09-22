import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, ShieldAlert, Users } from "lucide-react";

const crisisPoints = [
  {
    icon: <Landmark className="w-10 h-10 text-primary" />,
    title: "Election Manipulation",
    text: "Deepfakes can be used to create convincing but false videos of political candidates, spreading disinformation and influencing public opinion to sow social and political discord."
  },
  {
    icon: <ShieldAlert className="w-10 h-10 text-primary" />,
    title: "Online Scams & Frauds",
    text: "By impersonating trusted individuals or creating fake celebrity endorsements, malicious actors use deepfakes to execute sophisticated financial scams and steal sensitive information."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Eroding Public Trust",
    text: "The proliferation of deepfakes threatens to undermine our collective trust in media, news outlets, and public institutions, making it harder to distinguish fact from fiction."
  }
];

export function CrisisSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">The Deepfake Crisis</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why It Matters
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            In an age of digital information, the line between reality and fabrication is blurring. Understanding the risks is the first step toward protection.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {crisisPoints.map((point) => (
              <Card key={point.title} className="glassmorphic hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {point.icon}
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">{point.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
