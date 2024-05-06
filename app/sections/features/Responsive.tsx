import Image from "next/image";
import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";

export function Responsive() {
  return (
    <WobbleCard className="">
      <Card className="h-full bg-gradient-to-bl from-secondary  p-4 to-primary @container">
        <div className="flex justify-between flex-col h-full items-start @lg:!flex-row">
          <div>
            <h3 className="text-xl font-bold">Responsivt design</h3>
            <p className="text-sm mt-3 max-w-72">
              Jeg sørger for at din hjemmeside er responsiv, så den ser godt på
              alle enheder.
            </p>
          </div>
          <Image
            src="/responsive.webp"
            alt="hero"
            width={200}
            height={200}
            className="object-contain mx-auto @lg:mx-0 opacity-75"
          />
        </div>
      </Card>
    </WobbleCard>
  );
}
