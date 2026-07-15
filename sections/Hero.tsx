"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";

export function Hero() {
  const whatsappUrl = "https://wa.me/5551999166262";
  const primary = "#af18a6";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070"
          alt="Moda Feminina"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.35]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-16 pb-14 text-center md:px-12 md:pt-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex w-full flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-[10px] font-bold uppercase tracking-[0.5em] md:text-xs"
            style={{
              color: primary,
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Coleção Exclusive 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="max-w-4xl text-[2.7rem] font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-7xl"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            Do PP ao
            <br />
            <span className="font-light italic text-zinc-300">
              Plus Size
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-7 max-w-[290px] text-[15px] font-medium leading-7 tracking-wide text-zinc-300 md:mt-8 md:max-w-xl md:text-xl"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            Moda feminina para todos os estilos.
            <br />
            Porque beleza não tem padrão,
            <br className="hidden md:block" />
            tem personalidade.
          </motion.p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              backgroundColor: primary,
              color: "#fff",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-10 inline-flex h-14 w-full max-w-[290px] items-center justify-center gap-3 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] shadow-2xl transition-all md:mt-12 md:h-auto md:w-auto md:max-w-none md:px-10 md:py-5"
            style={{
              backgroundColor: primary,
              color: "#fff",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </motion.a>

          {/* Endereço Mobile */}
          <div
            className="mt-10 w-full max-w-[300px] rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-sm md:hidden"
            style={{ fontFamily: "Barlow, sans-serif" }}
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <MapPin
                size={14}
                className="text-[#af18a6]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-300">
                Nossa Loja
              </span>
            </div>

            <div className="space-y-1 text-center">
              <p className="text-[13px] font-medium text-white">
                Rua 28 de Fevereiro, 57 • Sala 01
              </p>

              <p className="text-[12px] uppercase tracking-[0.15em] text-zinc-500">
                Centro • Sapiranga, RS
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop esquerda */}
      <div
        className="absolute bottom-12 left-16 hidden md:block"
        style={{ fontFamily: "Barlow, sans-serif" }}
      >
        <div
          className="mb-3 h-px w-10"
          style={{ backgroundColor: primary }}
        />

        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-400">
          Curadoria de Moda
        </p>

        <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-zinc-600">
          PP ao Plus Size
        </p>
      </div>

      {/* Desktop direita */}
      <div
        className="absolute bottom-12 right-16 hidden max-w-sm text-right md:block"
        style={{ fontFamily: "Barlow, sans-serif" }}
      >
        <div className="mb-3 ml-auto h-px w-10 bg-zinc-700" />

        <p className="mb-2 flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-400">
          <MapPin size={11} style={{ color: primary }} />
          Nossa Loja
        </p>

        <p className="text-xs uppercase tracking-[0.16em] text-zinc-300">
          Rua 28 de Fevereiro, 57 • Sala 01
          <br />
          Centro — Sapiranga, RS
        </p>
      </div>
    </section>
  );
}