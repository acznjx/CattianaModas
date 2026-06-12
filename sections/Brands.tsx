"use client";

import { motion } from "framer-motion";

const brands = [
  "Ellan Moda Íntima", 
  "Bruna & Bia Malhas", 
  "Vislumbre", 
  "Upman", 
  "Arazzo", 
  "Rala Bela"
];

export const Brands = () => {
  return (
    <section className="py-12 md:py-20 bg-[#fdfcfb] overflow-hidden border-y border-zinc-100 flex items-center relative">
      <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-linear-to-r from-[#fdfcfb] via-[#fdfcfb]/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-linear-to-l from-[#fdfcfb] via-[#fdfcfb]/70 to-transparent z-10 pointer-events-none" />

      <div className="relative flex items-center w-full">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap items-center"
        >
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center group select-none">
              <span 
                style={{ fontFamily: "'Quicksand', sans-serif" }}
                className="text-3xl sm:text-5xl md:text-[5vw] font-bold uppercase tracking-tighter text-zinc-900 px-8 sm:px-12 md:px-20 transition-colors duration-500 group-hover:text-[#af18a6]"
              >
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};