"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const rosaCattiana = "#af18a6";

  return (
    // Container Principal: absolute garante que a barra não siga o scroll
    <nav className="absolute top-0 left-0 w-full z-100 h-20 md:h-28 bg-white flex items-center border-b border-zinc-100 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center relative h-full">
        
        {/* Lado Esquerdo: Links de Navegação */}
        <div 
          className="hidden md:flex gap-10 items-center flex-1" 
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          <Link 
            href="#localizacao" 
            onMouseEnter={() => setHoveredLink("localizacao")}
            onMouseLeave={() => setHoveredLink(null)}
            className="text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 py-2"
            style={{ color: hoveredLink === "localizacao" ? rosaCattiana : "#71717a" }}
          >
            Localização
          </Link>

          <Link 
            href="#footer" 
            onMouseEnter={() => setHoveredLink("contatos")}
            onMouseLeave={() => setHoveredLink(null)}
            className="text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 py-2"
            style={{ color: hoveredLink === "contatos" ? rosaCattiana : "#71717a" }}
          >
            Contatos
          </Link>
        </div>

        {/* Centro: Identidade Visual (Logo) */}
        <div className="flex-1 md:flex-none flex justify-start md:justify-center">
          <Link 
            href="/" 
            className="relative z-50 block w-32 h-16 md:w-48 md:h-24 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2"
          >
            <Image 
              src="https://i.imgur.com/R625ks3.png" 
              alt="Cattiana Modas" 
              fill 
              className="object-contain object-left md:object-center brightness-0 scale-[1.8] md:scale-[1.6] origin-left md:origin-center" 
              priority
            />
          </Link>
        </div>

        {/* Lado Direito: Atendimento WhatsApp */}
        <div 
          className="flex justify-end items-center flex-1"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          <a 
            href="https://wa.me/5551999166262" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredLink("whats")}
            onMouseLeave={() => setHoveredLink(null)}
            className="flex items-center gap-3 group transition-all"
          >
            <div className="flex flex-col items-end leading-none">
              <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1">
                Atendimento
              </span>
              <span 
                className="text-[12px] md:text-base font-bold tracking-tighter transition-colors duration-300"
                style={{ color: hoveredLink === "whats" ? rosaCattiana : "black" }}
              >
                51 99916.6262
              </span>
            </div>
            <motion.div 
              animate={{ 
                scale: hoveredLink === "whats" ? 1.1 : 1,
                backgroundColor: hoveredLink === "whats" ? rosaCattiana : "transparent",
                borderColor: hoveredLink === "whats" ? rosaCattiana : "#e4e4e7"
              }}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all"
            >
              <svg 
                className="w-4 h-4 transition-colors" 
                style={{ color: hoveredLink === "whats" ? "white" : "black" }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          </a>
        </div>

        {/* Detalhe Estético: Trapézio Decorativo */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-112.5 h-7 bg-white border-x border-b border-zinc-100 hidden md:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 100%)", zIndex: 40 }}
        />
      </div>
    </nav>
  );
};