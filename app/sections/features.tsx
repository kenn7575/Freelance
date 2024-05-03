import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Lamp } from "@/components/ui/Aceternity/lamp";
import { WobbleCard } from "@/components/ui/Aceternity/wobble-card";
import { Layers3 } from "lucide-react";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/Aceternity/multiStepLoader";
import { CheckCircle } from "lucide-react";
import Pie from "@/components/ui/stat-wheel";

const advantagesWithBackendIntegrations = [
  {
    text: "Email nyhedsbrev",
  },
  {
    text: "Booking System",
  },
  {
    text: "Login system",
  },
  {
    text: "Lagerstyring",
  },
  {
    text: "Webshop",
  },
  {
    text: "Booking system",
  },
  { text: "Digitalisering af processer" },
  { text: "API integrationer" },

  { text: "Database integration" },
  { text: "Chatbots og Kundesupport" },
  { text: "Tidsregistreringssystem" },
  { text: "Online Forum" },
  { text: "Logistik og Forsendelsessystem" },
  { text: "Advanceret databehandling" },
  { text: "Kommentarfelt" },
  { text: "Online betaling og abonnenter" },
  { text: "Auktionsplatform" },
  { text: "Realtime chat" },
  { text: "Digitalisering af excel-ark" },
];
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Grid() {
  return (
    <section>
      <Lamp />

      <div className="grid grid-cols-5 gap-2 mt-8 sm:p-2 lg:p-8">
        <Card className="h-full border-none">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <WobbleCard className="min-h-72">
          <Card
            className="h-full  justify-between flex flex-col overflow-hidden"
            id="stars"
          >
            <h3 className="font-thin text-2xl leading-tight mt-1 p-4">
              <span className="font-bold">S</span>EARCH <br />
              <span className="font-bold">E</span>NGINE <br />
              <span className="font-bold">O</span>PTIMIZATION
            </h3>
            <CardFooter className="flex justify-between p-0 bg-gradient-to-b from-[transparent] to-[#18181B]">
              <p className="text-foreground p-4">
                God SEO øger trafikken til din side
              </p>
            </CardFooter>
          </Card>
        </WobbleCard>
        <WobbleCard className="col-span-2">
          <Card className="h-full p-4 flex flex-col justify-between" id="sand">
            <div>
              <h3 className="text-xl font-bold">
                {"⚡️"}Hurtig hjemmeside i højeste kvalitet
              </h3>
              <p className="text-sm mt-3 max-w-96">
                Vis dine kunder respektere deres tid og hold dem engageret med
                en hurtig hjemmeside.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
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
        <WobbleCard className="">
          <Card className="h-full wrapper p-4 justify-between flex flex-col">
            <div>
              <h3 className="text-xl font-bold">Online betalinger</h3>
              <p className="text-sm mt-3"></p>
            </div>
            <Image
              src="/PoweredByStripe.svg"
              alt="hero"
              width={130}
              height={80}
              className="object-contain "
            />
          </Card>
        </WobbleCard>
        <WobbleCard className="">
          <Card className="h-full bg-gradient-to-bl from-secondary  p-4 to-primary">
            <div className="flex justify-between flex-col h-full items-start">
              <div>
                <h3 className="text-xl font-bold">Responsivt design</h3>
                <p className="text-sm mt-3">
                  Jeg sørger for at din hjemmeside er responsiv, så den ser godt
                  på alle enheder.
                </p>
              </div>
              <Image
                src="/responsive.webp"
                alt="hero"
                width={200}
                height={200}
                className="object-contain mx-auto opacity-75"
              />
            </div>
          </Card>
        </WobbleCard>
        <WobbleCard className="col-span-2">
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

        <Card
          className="border-0  flex flex-col gap-4 justify-between p-4 pb-0 overflow-hidden"
          id=""
        >
          <div>
            <h3 className="text-3xl font-bold">Full Stack Udvikling</h3>
            <p className="text-sm mt-3">
              Jeg udvikler også backend og API{"'"}er til dine projekter.
            </p>
          </div>
          <div className="flex justify-between overflow-hidden ">
            <Loader
              loadingStates={advantagesWithBackendIntegrations}
              loading={true}
            />
          </div>
        </Card>

        <WobbleCard className="col-span-2 min-h-72">
          <Card id="data" className="h-full p-4 flex flex-col justify-between">
            <h3 className="text-xl font-bold">Effektiv databaseintegration</h3>
            <p className="mt-3 text-sm max-w-72 text-foreground ">
              Vores databaseintegrationstjenester er designet til at strømline
              dine databehandlingsprocesser og forbedre effektiviteten i din
              organisation. Vi tilbyder sikker og skalerbar hosting, der
              garanterer pålidelig ydeevne og databeskyttelse.
            </p>
          </Card>
        </WobbleCard>
      </div>
    </section>
  );
}
