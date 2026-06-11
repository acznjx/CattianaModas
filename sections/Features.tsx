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
    <section 
      id="sobre" 
      className="min-h-[100dvh] flex items-center py-12 md:py-24 bg-[#fafafa] text-zinc-900 border-y border-zinc-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-12 w-full">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4 md:gap-8">
          <div>
            <span 
              style={{ fontFamily: "'Barlow', sans-serif" }}
              className="text-[#af18a6] text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-black mb-2 md:mb-4 block"
            >
              Nossos Pilares
            </span>
            <h2 
              style={{ fontFamily: "'Quicksand', sans-serif" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] md:leading-[0.9] tracking-tighter text-[#1a1a1a]"
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

        {/* Grid de Diferenciais - Mobile First real */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 bg-transparent md:bg-white rounded-2xl md:rounded-[3rem] md:overflow-hidden md:border md:border-zinc-200 md:shadow-2xl md:shadow-zinc-200/50">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              style={{ backgroundColor: f.bg }}
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[280px] md:min-h-[380px] lg:min-h-[420px] transition-all duration-700 group relative rounded-2xl md:rounded-none border border-zinc-200/60 md:border-0 md:border-r md:border-zinc-100 last:border-r-0 shadow-sm md:shadow-none"
            >
              <div className="space-y-4 md:space-y-6">
                <span 
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="text-[#af18a6] text-4xl md:text-5xl lg:text-6xl font-light opacity-20 md:opacity-10 group-hover:opacity-100 md:group-hover:translate-x-2 transition-all duration-700 block"
                >
                  0{i + 1}
                </span>
                <h4 
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                  className="text-base md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] font-black text-zinc-800"
                >
                  {f.title}
                </h4>
              </div>

              <div className="space-y-6 md:space-y-8 mt-6 md:mt-0">
                <p 
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                  className="text-zinc-600 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-[290px]"
                >
                  {f.desc}
                </p>
                
                {/* Linha animada de progresso */}
                <div className="relative h-[2px] w-full bg-zinc-200/80 overflow-hidden">
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