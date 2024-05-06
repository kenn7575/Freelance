import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";
import Pie from "@/components/ui/stat-wheel";
import { ShieldCheck } from "lucide-react";

export default function SeoCard() {
  return (
    <WobbleCard>
      <Card className="h-full  flex flex-col justify-between" id="dots2">
        <div className="bg-gradient-to-br via-background p-4 h-full from-background to-transparent">
          <div>
            <h3 className="text-xl font-bold">Cookies & privatlivs politik.</h3>
            <p className="text-sm mt-3 text-foreground/80">
              Jeg gør midt bedste for at sørge for at din hjemmeside lever op
              til GDPR
              <span className="text-2xs font-bold text-foreground"> 1</span> og
              at dine brugere har mulighed for at acceptere eller afvise
              cookies. Jeg sørger også for at dine brugere kan se hvilke cookies
              der er i brug.
            </p>
          </div>
          <div className="flex gap-4 mt-8 p-4">
            <ShieldCheck size={40} strokeWidth={1.25} />
          </div>
        </div>
      </Card>
    </WobbleCard>
  );
}
