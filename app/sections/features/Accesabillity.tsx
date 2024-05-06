import Image from "next/image";
import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";

export function Accesabillity() {
  return (
    <WobbleCard className="@container">
      <Card
        className="h-full p-4 flex flex-col justify-between @lg:flex-row"
        id="sand"
      >
        <div className="mt-3">
          <h3 className="text-xl font-bold">Tilgængeligheds-funktioner</h3>
          <p className="mt-3 text-sm max-w-72 text-foreground/80">
            Jeg sørger for at din hjemmeside er tilgængelig for alle brugere.
          </p>
        </div>
        <Image
          src="/accessibility.svg"
          alt="hero"
          width={150}
          height={150}
          className="object-contain mx-auto mt-4"
        />
      </Card>
    </WobbleCard>
  );
}
