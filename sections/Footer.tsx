"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#0a0a0a] text-zinc-400 pt-20 pb-10 border-t border-zinc-900 selection:bg-[#af18a6] selection:text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* SEÇÃO PRINCIPAL */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 mb-16">
          
          {/* Identidade */}
          <div className="space-y-3">
            <h3 
              style={{ fontFamily: "'Quicksand', sans-serif" }}
              className="text-2xl font-light uppercase tracking-tight text-white m-0"
            >
              Cattiana <span className="font-black text-[#af18a6]">Modas</span>
            </h3>
            <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
              Sapiranga / RS — Curadoria Feminina
            </p>
          </div>

          {/* Links e Contatos Simplificados */}
          <div className="grid grid-cols-2 sm:flex sm:gap-16 gap-x-8 gap-y-10 text-xs uppercase tracking-wider font-semibold">
            
            {/* Navegação */}
            <div className="space-y-4">
              <span className="text-[10px] text-zinc-600 tracking-[0.2em] font-bold block">Menu</span>
              <ul className="space-y-3">
                <li><a href="#sobre" className="hover:text-white transition-colors">Diferenciais</a></li>
                <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
                <li><a href="#marcas" className="hover:text-white transition-colors">Marcas</a></li>
              </ul>
            </div>

            {/* Suporte */}
            <div className="space-y-4">
              <span className="text-[10px] text-zinc-600 tracking-[0.2em] font-bold block">Suporte</span>
              <ul className="space-y-3">
                <li><a href="https://wa.me/5551999166262" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Atendimento VIP</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guia de Medidas</a></li>
              </ul>
            </div>

            {/* Redes Sociais Diretas */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <span className="text-[10px] text-[#af18a6] tracking-[0.2em] font-bold block">Contato</span>
              <ul className="space-y-3 text-white normal-case font-bold text-sm tracking-tight">
                <li>
                  <a href="https://wa.me/5551999166262" target="_blank" rel="noopener noreferrer" className="hover:text-[#af18a6] transition-colors">
                    51 99916.6262
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cattiana.modas/" target="_blank" rel="noopener noreferrer" className="hover:text-[#af18a6] transition-colors">
                    @cattiana.modas
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-wider font-medium text-zinc-600 uppercase">
          
          {/* Direitos Autorais */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <span>© {new Date().getFullYear()} Cattiana Modas.</span>
          </div>

          {/* Voltar ao topo - Discreto */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors order-1 md:order-2 font-bold"
          >
            <ArrowUp size={12} className="text-[#af18a6]" />
            Voltar ao topo
          </button>

          {/* Créditos Limpos */}
          <div className="order-3 text-[9px] text-zinc-600 tracking-widest">
            Powered by <span className="text-zinc-500 font-bold">Inari Technology</span>
          </div>
          
        </div>

      </div>
    </footer>
  );
};