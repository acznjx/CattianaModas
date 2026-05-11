"use client";

import { motion } from "framer-motion";

const features = [
  { 
    title: "PP ao Plus Size", 
    desc: "Curadoria inclusiva que valoriza as curvas e a maturidade feminina com elegância.",
    bg: "#fdf4ff" 
  },
  { 
    title: "Envio Nacional", 
    desc: "Enviamos para todo o Brasil com logística segura e cuidado em cada detalhe.",
    bg: "#fcfcfc" 
  },
  { 
    title: "Atendimento VIP", 
    desc: "Consultoria personalizada via WhatsApp para encontrar o caimento perfeito para você.",
    bg: "#f7f7f7" 
  }
];

export const Features = () => {
  const rosaCattiana = "#af18a6";

  return (
    /* Aumentei o py-20/32 para py-24/40 para dar mais respiro no topo e na base */
    <section id="sobre" className="py-24 md:py-40 bg-[#fafafa] text-zinc-900 border-y border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <span 
              style={{ fontFamily: "'Barlow', sans-serif" }}
              className="text-[#af18a6] text-[11px] tracking-[0.5em] uppercase font-black mb-4 block"
            >
              Nossos Pilares
            </span>
            <h2 
              style={{ fontFamily: "'Quicksand', sans-serif" }}
              className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter text-[#1a1a1a]"
            >
              Excelência <br /> 
              <span className="italic text-[#af18a6] font-light">nos detalhes</span>
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
            <span 
              style={{ fontFamily: "'Barlow', sans-serif" }}
              className="text-zinc-400 text-[10px] tracking-[0.5em] uppercase font-bold block mb-2"
            >
              Cattiana Modas
            </span>
            <div className="h-[2px] w-12 bg-[#af18a6] ml-auto" />
          </div>
        </div>

        {/* Grid de Diferenciais - Adicionado mb-20 para afastar do próximo componente */}
        <div className="grid md:grid-cols-3 gap-0 rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 mb-20">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              style={{ backgroundColor: f.bg }}
              className="p-12 md:p-16 flex flex-col justify-between min-h-[400px] transition-all duration-700 group relative border-r border-zinc-100 last:border-r-0"
            >
              <div className="space-y-6">
                <span 
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="text-[#af18a6] text-6xl font-light opacity-10 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700 block"
                >
                  0{i + 1}
                </span>
                <h4 
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                  className="text-[16px] md:text-[18px] uppercase tracking-[0.3em] font-black text-zinc-800"
                >
                  {f.title}
                </h4>
              </div>

              <div className="space-y-8">
                <p 
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="text-zinc-600 text-sm md:text-lg font-medium leading-relaxed max-w-[280px]"
                >
                  {f.desc}
                </p>
                
                <div className="relative h-[2px] w-full bg-zinc-200 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-1000 ease-in-out" 
                    style={{ backgroundColor: rosaCattiana }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};