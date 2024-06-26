import { Lamp } from "@/components/ui/Aceternity/lamp";

import SeoCard from "./seo-card";
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
    <section className="mb-16">
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
