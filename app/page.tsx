import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Signature from "./components/Signature";
import Boutique from "./components/Boutique";
import Studio from "./components/Studio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Manifesto />
      <Services />
      <Gallery />
      <Signature />
      <Boutique />
      <Studio />
      <Footer />
    </main>
  );
}
