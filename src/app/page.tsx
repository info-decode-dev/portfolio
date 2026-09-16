import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { GiantMeteor } from "@/components/GiantMeteor";
import { BlackHoleField } from "@/components/BlackHoleField";

export default function Home() {
  return (
    <main className="relative max-w-full overflow-x-clip bg-bg text-text">
      <Navbar />
      <GiantMeteor />
      <div className="hire-scene relative overflow-x-clip">
        <BlackHoleField />
        <Hero />
        <Work />
        <About />
        <Contact />
      </div>
    </main>
  );
}
