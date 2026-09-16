import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { GiantMeteor } from "@/components/GiantMeteor";
import { BlackHoleField } from "@/components/BlackHoleField";

export default function Home() {
  return (
    <main className="relative bg-bg text-text">
      <Navbar />
      <GiantMeteor />
      <div className="hire-scene relative overflow-visible">
        <BlackHoleField />
        <Hero />
        <Work />
        <About />
        <Contact />
      </div>
    </main>
  );
}
