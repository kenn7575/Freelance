import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";
import Pie from "@/components/ui/stat-wheel";

export default function SeoCard() {
  return (
    <WobbleCard className="sm:col-span-2">
      <Card className="h-full p-4 flex flex-col justify-between " id="green">
        <div>
          <h3 className="text-xl font-bold">
            {"⚡️"}Hurtig hjemmeside i højeste kvalitet
          </h3>
          <p className="text-sm mt-3 max-w-96 text-foreground/80">
            Vis dine kunder respektere deres tid og hold dem engageret med en
            hurtig hjemmeside.
          </p>
        </div>
        <div className="flex gap-2 items-baseline mt-8">
          <div className="flex flex-col gap-2 items-center">
            <Pie percentage={97} color="#00Cc66" />
            <p className="text-xs font-bold">Performance</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Pie percentage={100} color="#00Cc66" />
            <p className="text-xs font-bold">Accessibility</p>
          </div>{" "}
          <div className="flex flex-col gap-2 items-center">
            <Pie percentage={100} color="#00Cc66" />
            <p className="text-xs font-bold text-center">
              Best <br /> Practices
            </p>
          </div>{" "}
          <div className="flex flex-col gap-2 items-center">
            <Pie percentage={100} color="#00Cc66" />
            <p className="text-xs font-bold">SEO</p>
          </div>
        </div>
      </Card>
    </WobbleCard>
  );
}
