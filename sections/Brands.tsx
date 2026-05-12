"use client";

import { motion } from "framer-motion";

// ==========================================
// CONFIGURAÇÃO DAS MARCAS
// ==========================================
// Lista de marcas parceiras atualizada
const brands = [
  "Ellan Moda Íntima", 
  "Bruna e Bia Malhas", 
  "Vislumbre", 
  "Upman", 
  "Arezzo", 
  "Rala Bela"
];

export const Brands = () => {
  return (
    // ==========================================
    // CONTAINER PRINCIPAL
    // ==========================================
    <section className="py-16 md:py-24 bg-[#fdfcfb] overflow-hidden border-y border-zinc-100 flex items-center relative">
      
      {/* Máscaras Laterais: Efeito de suavização nas bordas */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-linear-to-r from-[#fdfcfb] via-[#fdfcfb]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-linear-to-l from-[#fdfcfb] via-[#fdfcfb]/80 to-transparent z-10 pointer-events-none" />

      {/* ==========================================
          MARQUEE (ANIMAÇÃO INFINITA)
          ========================================== */}
      <div className="relative flex items-center w-full">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Triplicamos a lista para garantir o loop contínuo */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center group">
              <span 
                style={{ fontFamily: "'Quicksand', sans-serif" }}
                className="text-5xl md:text-[6vw] font-bold uppercase tracking-tighter text-zinc-900 px-16 md:px-28 transition-colors duration-500 group-hover:text-[#af18a6]"
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