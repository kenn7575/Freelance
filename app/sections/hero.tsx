import { Highlight } from "@/components/ui/Aceternity/HeroHighlight";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center font-bold w-full safe"
    >
      <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
        Professionelle web løsninger,{" "}
        <Highlight className="text-black dark:text-white">
          skræddersyet til dine behov.
        </Highlight>
      </h1>
      <p className="mt-8 text-lg font-medium text-center text-foreground/80">
        Fra design, udvikling, serverintegrationer, hosting og analysering
        <br /> - Jeg har dig dækket.
      </p>

      <div className="mt-12 flex justify-center gap-4">
        <Button
          size="lg"
          className="uppercase gap-1 group font-bold"
          variant="ghost"
        >
          portfolio
          <MoveRight
            size={24}
            className="group-hover:translate-x-2 duration-200"
          />
        </Button>
        <Button
          size="lg"
          variant="default"
          className="uppercase font-bold text-black bg-white hover:bg-primary hover:text-white"
        >
          Kontakt mig
        </Button>
      </div>
    </section>
  );
}
