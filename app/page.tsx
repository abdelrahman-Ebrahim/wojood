import Chosen from "./components/Chosen/Chosen";
import ColorsSection from "./components/ColorsSection/ColorsSection";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Chosen />
      <ColorsSection />
    </div>
  );
}
