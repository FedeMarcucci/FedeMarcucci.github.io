import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import IlTrio from "@/components/IlTrio";
import PercheTrio from "@/components/PercheTrio";
// import Esperienza from "@/components/Esperienza";
import Galleria from "@/components/Galleria";
import Repertorio from "@/components/Repertorio";
import Video from "@/components/Video";
import Testimonianze from "@/components/Testimonianze";
import Attrezzatura from "@/components/Attrezzatura";
import Prezzi from "@/components/Prezzi";
import FAQ from "@/components/FAQ";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <IlTrio />
        <PercheTrio />
        {/* <Esperienza /> */}
        <Galleria />
        <Repertorio />
        <Video />
        <Testimonianze />
        <Attrezzatura />
        <Prezzi />
        <FAQ />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
