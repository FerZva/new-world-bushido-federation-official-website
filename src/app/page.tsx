import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import Disciplines from "./components/Disciplines";
import Shields from "./components/Shields";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Benefits />
      <Disciplines />
      <Shields />
    </div>
  );
}
