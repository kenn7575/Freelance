import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";

export function Database() {
  return (
    <WobbleCard className="sm:col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
      <Card
        id="dots"
        className="h-full w-full flex flex-col justify-between min-h-48
      "
      >
        <div className="flex flex-col bg-gradient-to-br from-background h-full to-transparent p-4">
          <h3 className="text-xl font-bold">Databaseintegrationer</h3>
          <p className="text-sm mt-3 max-w-80 text-foreground/80">
            Jeg tilbyder hosting og integration af databaser til hjemmesider med
            dynamisk indhold. Desuden sørger tage backups af dine data.
          </p>
        </div>
      </Card>
    </WobbleCard>
  );
}
