import Image from "next/image";

import Hero from "./sections/hero";
import Features from "./sections/features/features";

import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
