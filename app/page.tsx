import Chosen from "./components/Chosen/Chosen";
import ColorsSection from "./components/ColorsSection/ColorsSection";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Chosen />
      <ColorsSection />
      <Gallery />
    </div>
  );
}
