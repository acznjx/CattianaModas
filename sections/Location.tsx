"use client";

import { Ruler, Scissors, Shirt, MapPin, Clock } from "lucide-react";

export const LocationAndFitting = () => {
  const googleMapsUrl = "https://www.google.com/maps?q=Rua+28+de+Fevereiro+57+Sapiranga"; 
  const iframeMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.8071661645396!2d-51.01188372403212!3d-29.63836151322047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951939efaf0a867b%3A0x6b9ff0185987f2b9!2sR.%2028%20de%20Fevereiro%2C%2057%20-%20Centro%2C%20Sapiranga%20-%20RS%2C%2093800-000!5e0!3m2!1spt-BR!2sbr!4v1717942400000!5e0";

  return (
    <>
      <section className="min-h-dvh flex items-center py-12 md:py-24 bg-white text-zinc-900 overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center mb-10 md:mb-16">
            <div className="md:col-span-8">
              <span 
                style={{ fontFamily: "'Barlow', sans-serif" }} 
                className="text-[#af18a6] text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.6em] uppercase font-black mb-2 md:mb-4 block"
              >
                Guia de Medidas
              </span>
              <h3 
                style={{ fontFamily: "'Quicksand', sans-serif" }} 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.95] md:leading-[0.9]"
              >
                O ajuste <br />
                <span className="italic text-zinc-300 font-light">Perfeito</span>
              </h3>
            </div>
            <div className="md:col-span-4 border-l-2 border-[#af18a6] pl-4 md:pl-6 py-1">
              <p 
                style={{ fontFamily: "'Quicksand', sans-serif" }} 
                className="text-zinc-500 text-sm md:text-base max-w-md leading-relaxed"
              >
                Para mulheres que buscam elegância e conforto. Descubra seu tamanho ideal e sinta-se confiante com o caimento de nossas peças.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
            <div className="relative group p-6 md:p-8 bg-zinc-50 rounded-2xl md:rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-[#af18a6]/10 transition-all duration-500 border border-zinc-100/50">
              <span className="absolute top-4 right-6 md:right-8 text-4xl md:text-5xl font-black text-zinc-200/60 group-hover:text-[#af18a6]/10 transition-colors pointer-events-none">01</span>
              <Ruler className="text-[#af18a6] mb-4 md:mb-6" size={32} strokeWidth={1.5} />
              <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 md:mb-4">Busto</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Contorne o busto na parte mais larga. Mantenha a fita firme, mas sem apertar a pele.
              </p>
            </div>

            <div className="relative group p-6 md:p-8 bg-zinc-50 rounded-2xl md:rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-[#af18a6]/10 transition-all duration-500 border border-zinc-100/50">
              <span className="absolute top-4 right-6 md:right-8 text-4xl md:text-5xl font-black text-zinc-200/60 group-hover:text-[#af18a6]/10 transition-colors pointer-events-none">02</span>
              <Scissors className="text-[#af18a6] mb-4 md:mb-6" size={32} strokeWidth={1.5} />
              <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 md:mb-4">Cintura</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Meça a parte mais estreita da sua cintura, logo acima do umbigo, de forma relaxada.
              </p>
            </div>

            <div className="relative group p-6 md:p-8 bg-zinc-50 rounded-2xl md:rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-[#af18a6]/10 transition-all duration-500 border border-zinc-100/50">
              <span className="absolute top-4 right-6 md:right-8 text-4xl md:text-5xl font-black text-zinc-200/60 group-hover:text-[#af18a6]/10 transition-colors pointer-events-none">03</span>
              <Shirt className="text-[#af18a6] mb-4 md:mb-6" size={32} strokeWidth={1.5} />
              <h4 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 md:mb-4">Quadril</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Contorne a região com maior largura dos glúteos para garantir o conforto ao sentar e andar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="localizacao" className="min-h-dvh flex items-center py-12 md:py-24 bg-zinc-100">
        <div className="container mx-auto px-4 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center order-1">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <MapPin size={16} className="text-[#af18a6]" />
                <span style={{ fontFamily: "'Barlow', sans-serif" }} className="text-[#af18a6] text-[10px] md:text-xs tracking-[0.3em] uppercase font-black">
                  Visite-nos
                </span>
              </div>
              
              <h3 style={{ fontFamily: "'Quicksand', sans-serif" }} className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-[0.95] tracking-tighter mb-6 md:mb-8">
                <span className="text-zinc-900 block">No coração de</span>
                <span className="text-[#af18a6] italic font-light block">Sapiranga</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-t border-zinc-200 pt-6 md:pt-8">
                <div>
                  <h5 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-xs uppercase tracking-wider font-black text-zinc-400 mb-2">Endereço</h5>
                  <p style={{ fontFamily: "'Quicksand', sans-serif" }} className="text-zinc-600 text-sm md:text-base leading-relaxed">
                    Rua 28 de Fevereiro, 57 <br />
                    Sala 01 — Centro <br />
                    Sapiranga - RS
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h5 style={{ fontFamily: "'Barlow', sans-serif" }} className="text-xs uppercase tracking-wider font-black text-zinc-400 flex items-center gap-1.5">
                    <Clock size={12} className="text-[#af18a6]" /> Atendimento
                  </h5>
                  <div style={{ fontFamily: "'Quicksand', sans-serif" }} className="space-y-3 text-zinc-700 text-sm md:text-base">
                    <div className="flex flex-col border-b border-zinc-200/50 pb-2">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-zinc-800">Segunda a Sexta</span>
                        <span className="text-[#af18a6] font-semibold text-xs sm:text-sm">9h às 18h30</span>
                      </div>
                      <span className="text-[10px] md:text-xs text-zinc-400 font-medium mt-0.5">
                          Sem fechar ao meio-dia
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline pt-0.5">
                      <span className="font-bold text-zinc-800">Sábados</span>
                      <span className="text-[#af18a6] font-semibold text-xs sm:text-sm">9h às 16h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                  className="group inline-flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] bg-zinc-900 text-white w-full sm:w-auto px-8 py-4 md:py-5 hover:bg-[#af18a6] transition-all duration-300 shadow-md hover:shadow-xl rounded-xl lg:rounded-none"
                >
                  Como Chegar
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full order-2">
              <div className="relative w-full aspect-video sm:aspect-square lg:aspect-square max-w-[450px] lg:max-w-none mx-auto rounded-2xl md:rounded-3xl overflow-hidden border-4 md:border-8 border-white shadow-xl">
                <iframe 
                  src={iframeMapsUrl} 
                  title="Mapa de localização real da loja no Centro de Sapiranga"
                  className="w-full h-full border-0 grayscale-[0.2] contrast-[1.05]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};