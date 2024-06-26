import { MultiStepLoader as Loader } from "@/components/ui/Aceternity/multiStepLoader";
import { Card } from "@/components/ui/card";
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

export function FullStack() {
  return (
    <Card className="border-0  flex flex-col gap-4 justify-between p-4 pb-0 overflow-hidden">
      <div>
        <h3 className="text-xl font-bold">Full Stack Udvikling</h3>
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
  );
}
