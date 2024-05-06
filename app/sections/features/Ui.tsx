import Image from "next/image";
import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export function Ui() {
  return (
    <WobbleCard className="sm:col-span-2">
      <Card className="h-full overflow-hidden">
        <CardHeader>
          <Image
            src="/ui.png"
            alt="hero"
            className="w-full rounded-md h-60 object-contain "
            width={500}
            height={500}
          />
        </CardHeader>

        <CardFooter className="flex justify-between">
          <h3 className="text-xl font-bold">
            Enestående UI/UX Design med fokus på brugervenlighed.
          </h3>
        </CardFooter>
      </Card>
    </WobbleCard>
  );
}
