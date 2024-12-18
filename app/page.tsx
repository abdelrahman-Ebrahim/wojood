import Artists from "./components/Artists/Artists";
import ArtSection from "./components/ArtSection/ArtSection";
import CanvasSection from "./components/CanvasSection/CanvasSection";
import Chosen from "./components/Chosen/Chosen";
import ColorsSection from "./components/ColorsSection/ColorsSection";
import FramesSection from "./components/FramesSection/FramesSection";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import JoinUs from "./components/JoinUs/JoinUs";
import Library from "./components/Library/Library";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Chosen />
      <ColorsSection />
      <Gallery />
      <ArtSection />
      <CanvasSection />
      <FramesSection />
      <JoinUs />
      <Library />
      <Services />
      <Artists />
    </div>
  );
}
