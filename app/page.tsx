import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Brands } from "@/sections/Brands";
import { Features } from "@/sections/Features";
import { LocationAndFitting } from "@/sections/Location"; 
import { Footer } from "@/sections/Footer";
import WhatsAppButton from "@/sections/WhatsAppButton";
export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#af18a6] selection:text-white overflow-x-hidden">
      
      <Navbar />

      <article>
        <Hero />
        <Brands />
        <Features />
        <LocationAndFitting /> 
        <Footer />
        <WhatsAppButton/>
      </article>

    </main>
  );
}