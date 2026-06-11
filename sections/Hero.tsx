"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  const rosaCattiana = "#af18a6";
  const instagramUrl = "https://www.instagram.com/cattianamodas";

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black text-white">
      
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <Image 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070" 
            alt="Editorial Cattiana"
            fill
            priority
            className="object-cover brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          <span 
            style={{ fontFamily: "'Barlow', sans-serif" }}
            className="text-[#af18a6] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6 block"
          >
            Coleção Exclusive 2026
          </span>

          <h1 
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-[6vw] lg:text-[5.5vw] font-bold leading-[1.05] uppercase mb-6 md:mb-8 tracking-tighter max-w-4xl"
          >
            Do PP ao <br />
            <span className="italic font-light text-zinc-400">Plus Size</span>
          </h1>

          <p 
            style={{ fontFamily: "'Quicksand', sans-serif" }}
            className="max-w-[95%] md:max-w-2xl text-zinc-300 text-sm md:text-xl font-medium leading-relaxed mb-8 md:mb-10 tracking-wide"
          >
            Porque beleza não tem padrão, <br className="hidden md:block" />
            tem personalidade.
          </p>

          <div style={{ fontFamily: "'Barlow', sans-serif" }} className="w-full sm:w-auto">
            <motion.a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: rosaCattiana, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-10 md:px-16 py-4 md:py-6 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 shadow-2xl"
            >
              Explorar no Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div 
        className="hidden md:flex absolute bottom-10 left-16 flex-col gap-2"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <div className="h-px w-8 bg-[#af18a6] mb-2" />
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.4em] font-bold">
          Curadoria de Moda
        </p>
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-bold">
          PP ao Plus Size
        </p>
      </div>

      <div 
        className="hidden md:flex absolute bottom-10 right-16 text-right flex-col gap-2 items-end"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <div className="h-px w-8 bg-zinc-700 mb-2" />
        <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-medium">
          Sapiranga, RS
        </p>
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-medium">
          Brasil
        </p>
      </div>

    </section>
  );
};