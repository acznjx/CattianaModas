"use client";

import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import LiquidGlassButton from "@/sections/LiquidGlassButton";

const WHATSAPP_URL = "https://wa.me/5551999166262";
const PRIMARY = "#af18a6";

const FONT_DISPLAY = "var(--font-quicksand), sans-serif";
const FONT_UI = "var(--font-barlow), sans-serif";

// Entrada em cascata: cada filho aparece um pouco depois do anterior
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black text-white">
        {/* Background */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Zoom lento na imagem (efeito Ken Burns) */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-[0.35]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black" />

          {/* Brilho rosa sutil atrás do título */}
          <div
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.18] blur-[100px] md:h-[460px] md:w-[460px]"
            style={{ backgroundColor: PRIMARY }}
          />

          {/* Vinheta nas bordas para focar o centro */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]" />
        </div>

        {/* Conteúdo (pt compensa a altura do navbar) */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-32 pb-14 text-center md:px-12 md:pt-36 md:pb-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex w-full flex-col items-center"
          >
            <motion.span
              variants={item}
              className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.5em] md:text-xs"
              style={{ color: PRIMARY, fontFamily: FONT_UI }}
            >
              <span aria-hidden="true" className="h-px w-6 md:w-10" style={{ backgroundColor: PRIMARY }} />
              Coleção Exclusive 2026
              <span aria-hidden="true" className="h-px w-6 md:w-10" style={{ backgroundColor: PRIMARY }} />
            </motion.span>

            <motion.h1
              variants={item}
              className="max-w-4xl text-[2.7rem] font-bold uppercase leading-[0.95] tracking-tight text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-5xl md:text-7xl lg:text-8xl"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Do PP ao
              <br />
              <span className="relative inline-block font-light italic text-zinc-200">
                Plus Size
                {/* Traço rosa que se desenha sob "Plus Size" */}
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full md:-bottom-3"
                  style={{ backgroundColor: PRIMARY }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-[290px] text-[15px] font-medium leading-7 tracking-wide text-zinc-300 md:mt-10 md:max-w-xl md:text-xl md:leading-8"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Moda feminina para todos os estilos.
              <br />
              Porque beleza não tem padrão,
              <br className="hidden md:block" />{" "}
              <span className="text-white">tem personalidade.</span>
            </motion.p>

            {/* CTA: botão Liquid Glass */}
            <motion.div
              variants={item}
              whileTap={{ scale: 0.97 }}
              className="mt-10 w-full max-w-[290px] md:mt-12 md:w-auto md:max-w-none"
            >
              <LiquidGlassButton
                link={WHATSAPP_URL}
                newTab
                ariaLabel="Falar com a Cattiana Modas no WhatsApp"
                className="group w-full md:w-auto"
                buttonClassName="outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                padding="18px 40px"
                rounded={100}
                gap={12}
                colors={{ fill: "#FFFFFF", textColor: "#FFFFFF" }}
                font={{
                  fontFamily: FONT_UI,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
                stroke={{
                  type: "gradient",
                  angle: 180,
                  width: 1.5,
                  colorA: "rgba(255, 255, 255, 0.55)",
                  colorB: "rgba(255, 255, 255, 0.2)",
                }}
                light={{
                  size: 45,
                  color: "rgba(214, 90, 205, 0.55)",
                  intensity: 100,
                  smoothness: 65,
                }}
                style={{ boxShadow: "0 12px 40px -12px rgba(175,24,166,0.55)" }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar no WhatsApp
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="-ml-1 transition-transform duration-300 group-hover:translate-x-1"
                />
              </LiquidGlassButton>
            </motion.div>

            {/* Endereço Mobile */}
            <motion.div
              variants={item}
              className="mt-10 w-full max-w-[300px] rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md md:hidden"
              style={{ fontFamily: FONT_UI }}
            >
              <div className="mb-3 flex items-center justify-center gap-2">
                <MapPin size={14} className="text-[#af18a6]" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-300">
                  Nossa Loja
                </span>
              </div>

              <address className="space-y-1 text-center not-italic">
                <p className="text-[13px] font-medium text-white">
                  Rua 28 de Fevereiro, 57 • Sala 01
                </p>
                <p className="text-[12px] uppercase tracking-[0.15em] text-zinc-400">
                  Centro • Sapiranga, RS
                </p>
              </address>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="absolute bottom-12 left-16 hidden md:block"
          style={{ fontFamily: FONT_UI }}
        >
          <div className="mb-3 h-px w-10" style={{ backgroundColor: PRIMARY }} />
          <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-zinc-400">
            Curadoria de Moda
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-zinc-500">
            PP ao Plus Size
          </p>
        </motion.div>

        {/* Indicador de rolagem (desktop) */}
        <motion.a
          href="#sobre"
          aria-label="Rolar para a próxima seção"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center text-zinc-500 transition-colors duration-300 hover:text-white md:flex"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} aria-hidden="true" />
          </motion.span>
        </motion.a>

        {/* Desktop direita */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="absolute bottom-12 right-16 hidden max-w-sm text-right md:block"
          style={{ fontFamily: FONT_UI }}
        >
          <div className="mb-3 ml-auto h-px w-10 bg-zinc-700" />
          <p className="mb-2 flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-400">
            <MapPin size={11} style={{ color: PRIMARY }} aria-hidden="true" />
            Nossa Loja
          </p>
          <address className="text-xs uppercase not-italic tracking-[0.16em] text-zinc-300">
            Rua 28 de Fevereiro, 57 • Sala 01
            <br />
            Centro — Sapiranga, RS
          </address>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
