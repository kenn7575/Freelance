import Image from "next/image";
import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";

export function Analysis() {
  return (
    <WobbleCard className="sm:col-span-2 min-h-72">
      <Card className="h-full gap-4 p-4 flex justify-between">
        <div>
          <h3 className="text-xl font-bold">Bruger analyse & tracking</h3>
          <p className="mt-3 text-sm max-w-72 text-foreground/75 ">
            Se hvor mange besøgende din hjemmeside har, hvor de kommer fra. Der
            er også muligt at se hvordan brugerne interagerer med din side.
            <br />
            <br />
          </p>
        </div>
        <Image
          src="/analytics.webp"
          alt="hero"
          width={800}
          height={800}
          className="object-cover w-1/2 object-left h-full mt-4 mix-blend-lighten"
        />
      </Card>
    </WobbleCard>
  );
}
