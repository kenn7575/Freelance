import { Lamp } from "@/components/ui/Aceternity/lamp";

import Pie from "@/components/ui/stat-wheel";

import SeoCard from "./seo-card";

export const advantagesWithBackendIntegrations = [
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
import { Handshake, ShieldCheck } from "lucide-react";
import Hosting from "./hosting";
import Performance from "./performance";
import Privacy from "./privacy";
import { Responsive } from "./Responsive";
import { Ui } from "./Ui";
import { FullStack } from "./FullStack";
import { Accesabillity } from "./Accesabillity";
import { Maintenance } from "./Maintenance";
import { Analysis } from "./Analysis";
import { Stripe } from "./Stripe";
import { Database } from "./Database";

export default function features() {
  return (
    <section>
      <Lamp />
      <div className="safe">
        <div className="grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 lg:p-8 grid-flow-dense">
          <SeoCard />
          <Hosting />
          <Performance />
          <Privacy />
          <Responsive />
          <Ui />
          <FullStack />
          <Accesabillity />
          <Maintenance />
          <Analysis />
          <Stripe />
          <Database />
        </div>
      </div>
    </section>
  );
}
