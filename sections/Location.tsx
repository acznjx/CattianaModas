"use client";

import { Ruler, Scissors, Shirt, MapPin } from "lucide-react";

export const LocationAndFitting = () => {
  const googleMapsUrl = "https://www.google.com/maps?q=Rua+28+de+Fevereiro+57+Sapiranga"; 

  return (
    <>
      {/* SEÇÃO: GUIA DE MEDIDAS */}
      <section className="py-16 md:py-24 bg-white text-zinc-900 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Cabeçalho da Seção */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center mb-16 md:mb-20">
            <div className="md:col-span-8">
              <span style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#af18a6] text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase font-black mb-3 md:mb-4 block">
                Guia de Medidas
              </span>
              <h3 style={{ fontFamily: "'Quicksand', sans-serif" }} className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
                O ajuste <br />
                <span className="italic text-zinc-300 font-light">Perfeito</span>
              </h3>
            </div>
            <div className="md:col-span-4 mt-4 md:mt-0">
              <p style={{ fontFamily: "'Quicksand', sans-serif" }} className="text-zinc-500 text-sm md:text-base border-l-2 border-[#af18a6] pl-6 py-2 max-w-md">
                Para mulheres que buscam elegância e conforto. Descubra seu tamanho ideal e sinta-se confiante com o caimento de nossas peças.
              </p>
            </div>
          </div>

          {/* Grid de Passos de Medição */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative">
            {/* Passo 01 - Busto */}
            <div className="relative group p-8 bg-[#fafafa] rounded-4xl hover:bg-white hover:shadow-2xl hover:shadow-[#af18a6]/10 transition-all duration-500 border border-zinc-50">
              <span className="absolute top-4 right-8 text-4xl md:text-5xl font-black text-zinc-100 group-hover:text-[#af18a6]/10 transition-colors">01</span>
              <Ruler className="text-[#af18a6] mb-6" size={32} strokeWidth={1.5} />
              <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-2xl font-black uppercase tracking-tight mb-4">Busto</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Contorne o busto na parte mais larga. Mantenha a fita firme, mas sem apertar a pele.
              </p>
            </div>

            {/* Passo 02 - Cintura */}
            <div className="relative group p-8 bg-[#fafafa] rounded-4xl hover:bg-white hover:shadow-2xl hover:shadow-[#af18a6]/10 transition-all duration-500 border border-zinc-50">
              <span className="absolute top-4 right-8 text-4xl md:text-5xl font-black text-zinc-100 group-hover:text-[#af18a6]/10 transition-colors">02</span>
              <Scissors className="text-[#af18a6] mb-6" size={32} strokeWidth={1.5} />
              <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-2xl font-black uppercase tracking-tight mb-4">Cintura</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Meça a parte mais estreita da sua cintura, logo acima do umbigo, de forma relaxada.
              </p>
            </div>

            {/* Passo 03 - Quadril */}
            <div className="relative group p-8 bg-[#fafafa] rounded-4xl hover:bg-white hover:shadow-2xl hover:shadow-[#af18a6]/10 transition-all duration-500 border border-zinc-50">
              <span className="absolute top-4 right-8 text-4xl md:text-5xl font-black text-zinc-100 group-hover:text-[#af18a6]/10 transition-colors">03</span>
              <Shirt className="text-[#af18a6] mb-6" size={32} strokeWidth={1.5} />
              <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-2xl font-black uppercase tracking-tight mb-4">Quadril</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Contorne a região com maior largura dos glúteos para garantir o conforto ao sentar e andar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: LOCALIZAÇÃO */}
      <section id="localizacao" className="py-16 md:py-24 bg-[#f2f2f2] relative overflow-hidden">
        
        {/* Marca d'água decorativa */}
        <div 
          style={{ fontFamily: "'Barlow', sans-serif" }}
          className="absolute top-4 md:-top-12 left-0 right-0 md:left-auto md:-right-12 text-center md:text-right text-[14vw] md:text-[18vw] font-black text-white leading-none select-none pointer-events-none uppercase italic blur-[1px] md:blur-sm opacity-60 md:opacity-80 z-0"
        >
          Localização
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 mb-12 md:mb-16">
            
            <div className="w-full md:max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={18} className="text-[#af18a6]" />
                <span style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#af18a6] text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-black">
                  Nossa Loja
                </span>
              </div>
              
              <h3 style={{ fontFamily: "'Quicksand', sans-serif" }} className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase leading-none md:leading-[0.85] tracking-tighter">
                <span className="text-zinc-900 block md:whitespace-nowrap">No coração de</span>
                <span className="text-[#af18a6] italic font-light block">Sapiranga</span>
              </h3>
            </div>
            
            {/* Endereço e CTA */}
            <div className="w-full md:w-auto flex flex-col gap-6 items-start md:items-end">
              <p style={{ fontFamily: "'Barlow', sans-serif" }} className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest font-bold md:text-right leading-relaxed">
                Rua 28 de Fevereiro, 57 — Sala 01 <br />
                Centro, Sapiranga - RS
              </p>
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Barlow', sans-serif" }}
                className="group flex items-center justify-center md:justify-start gap-4 text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] bg-[#111111] text-white w-full md:w-auto px-10 py-5 md:py-6 hover:bg-[#af18a6] transition-all duration-500 shadow-xl"
              >
                Como Chegar
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Iframe do Mapa */}
          <div className="relative w-full aspect-square md:aspect-21/9 rounded-4xl overflow-hidden border-4 md:border-8 border-white shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.752317189196!2d-51.0089!3d-29.6385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDM4JzE4LjYiUyA1McKwMDAnMzIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
              className="w-full h-full border-0 grayscale-[0.3] contrast-[1.1]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};