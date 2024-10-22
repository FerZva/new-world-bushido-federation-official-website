import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import Disciplines from "./components/Disciplines";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Benefits />
      <Disciplines />
    </div>
  );
}
