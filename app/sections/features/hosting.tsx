import Image from "next/image";
import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Card } from "@/components/ui/card";

export default function Hosting() {
  return (
    <WobbleCard className="">
      <Card
        className="h-full border-none p-4 relative overflow-hidden min-h-60"
        id="earth"
      >
        <Image
          src="/earth.jpg"
          alt="hero"
          width={300}
          height={300}
          className="object-contain absolute -right-24 mix-blend-screen -bottom-1/2  h-full animate-spin-slow"
        />
        <div className="max-w-80">
          <h3 className="text-xl font-bold ">
            Global-scale hosting med indbygget sikkerhed
          </h3>
          <p className="text-sm mt-3 text-foreground/80">
            Jeg sørger for sikker og hurtig hosting på{" "}
            <a
              className="underline"
              href="https://firebase.google.com/products/hosting"
              target="_blank"
            >
              Google Cloud
            </a>{" "}
            eller{" "}
            <a className="underline" href="https://vercel.com/" target="_blank">
              Vercel
            </a>
            , med mulighed for CDN og SSL.
          </p>
        </div>
      </Card>
    </WobbleCard>
  );
}
