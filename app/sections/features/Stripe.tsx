import Image from "next/image";
import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";

export function Stripe() {
  return (
    <WobbleCard className="">
      <Card className="h-full wrapper p-4 justify-between flex flex-col min-h-52">
        <div>
          <h3 className="text-xl font-bold">Online betalinger</h3>
          <p className="text-sm mt-3">
            Modtag betalinger og abonenter via din hjemmeside.
          </p>
        </div>
        <a href="https://stripe.com" target="_blank">
          <Image
            src="/PoweredByStripe.svg"
            alt="hero"
            width={130}
            height={80}
            className="object-contain "
          />
        </a>
      </Card>
    </WobbleCard>
  );
}
