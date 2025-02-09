import Appbar from "./components/appbar";
import HeroSection from "./components/landing/heroSection";
import EvolvingSection from "./components/landing/evolvingSection";
import EvolvingTitleSection from "./components/landing/evolvingTitleSection";
import GetInTouch from "./components/landing/getInTouchSection";
import Footer from "./components/landing/footer";

export default function Home() {
  return (
    <div>
      <Appbar />
      <HeroSection />
      <EvolvingTitleSection />
      <EvolvingSection />
      <GetInTouch />
      <Footer />
    </div>
  );
}
