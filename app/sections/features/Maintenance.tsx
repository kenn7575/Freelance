import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";
import { Lock, RefreshCw } from "lucide-react";

export function Maintenance() {
  return (
    <WobbleCard>
      <Card className="h-full p-4 flex flex-col justify-between">
        <div className="flex flex-col ">
          <h3 className="text-xl font-bold">Vedligeholdese</h3>
          <p className="text-sm mt-3 text-foreground/80">
            Jeg tilbyder vedligeholdelse af din hjemmeside, så du kan fokusere
            på din forretning. Jeg sørger for at din hjemmeside bliver opdateret
            når der kommer nye sikkerhedsopdateringer.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <Lock strokeWidth={1.25} size={42} />
          <RefreshCw strokeWidth={1.25} size={42} />
        </div>
      </Card>
    </WobbleCard>
  );
}
