"use client";

import { MessageCircle, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#111111] text-white pt-24 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Seção Principal: Grid de Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 items-start">
          
          {/* Branding & Localização */}
          <div className="md:col-span-1 space-y-6">
            <h3 
              style={{ fontFamily: "'Quicksand', sans-serif" }}
              className="text-3xl font-black uppercase tracking-tighter leading-none"
            >
              Cattiana <br />
              <span className="text-[#af18a6]">Modas</span>
            </h3>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold leading-relaxed max-w-50">
              Sapiranga / RS <br />
              Premium Female Curation
            </p>
          </div>

          {/* Menu de Navegação Interna */}
          <div className="md:col-span-1 space-y-6">
            <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-100">
              Explorar
            </h4>
            <ul style={{ fontFamily: "'Barlow', sans-serif" }} className="flex flex-col gap-4 text-[12px] uppercase font-bold text-zinc-500">
              <li><a href="#sobre" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
              <li><a href="#marcas" className="hover:text-white transition-colors">Marcas Parceiras</a></li>
            </ul>
          </div>

          {/* Suporte e Institucional */}
          <div className="md:col-span-1 space-y-6">
            <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-100">
              Suporte
            </h4>
            <ul style={{ fontFamily: "'Barlow', sans-serif" }} className="flex flex-col gap-4 text-[12px] uppercase font-bold text-zinc-500">
              <li><a href="https://wa.me/5551999166262" target="_blank" className="hover:text-white transition-colors">Atendimento VIP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia de Medidas</a></li>
            </ul>
          </div>

          {/* Contato Direto & Redes Sociais */}
          <div className="md:col-span-1 flex flex-col md:items-end space-y-8 text-left md:text-right">
            <div className="space-y-2">
              <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[11px] font-black uppercase tracking-[0.3em] text-[#af18a6]">
                Conecte-se
              </h4>
              <a href="https://wa.me/5551999166262" target="_blank" className="text-2xl font-black tracking-tighter hover:text-zinc-300 transition-colors">
                51 99916.6262
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/cattiana.modas/" 
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full hover:bg-[#af18a6] transition-all duration-300 border border-zinc-800"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://wa.me/5551999166262" 
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-full hover:bg-[#25D366] transition-all duration-300 border border-zinc-800"
              >
                <MessageCircle size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright & Créditos */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-zinc-500">
              <span>© {new Date().getFullYear()} Cattiana Modas.</span>
              <span className="hidden md:inline italic">Exclusive Collection</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-100 hover:text-[#af18a6] transition-colors"
          >
            <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            Voltar ao Topo
          </button>

          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-[8px] font-bold uppercase tracking-widest">Powered by</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white hover:text-[#af18a6] cursor-default transition-colors">
              Inari Technology
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};