import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";

export default function SeoCard() {
  return (
    <WobbleCard className="min-h-72">
      <Card
        className="h-full justify-between flex flex-col overflow-hidden"
        id="stars"
      >
        <h3 className="font-thin text-2xl leading-tight mt-1 p-4">
          <span className="font-bold">S</span>EARCH <br />
          <span className="font-bold">E</span>NGINE <br />
          <span className="font-bold">O</span>PTIMIZATION
        </h3>
        <div className="flex justify-between p-0 bg-gradient-to-b from-[transparent] to-[#18181B]">
          <p className="text-foreground p-4">
            God SEO øger trafikken til din side
          </p>
        </div>
      </Card>
    </WobbleCard>
  );
}
