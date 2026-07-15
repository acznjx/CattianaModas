"use client";

import { motion, MotionConfig } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5551999166262";
const PRIMARY = "#af18a6";
const SECTION_BG = "#f7f4f7";

const FONT_DISPLAY = "var(--font-quicksand), sans-serif";
const FONT_UI = "var(--font-barlow), sans-serif";

type Feature = {
  title: string;
  desc: string;
  /** Etiqueta em destaque (rosa) */
  featured?: boolean;
  /** Comprimento do fio no desktop — alturas diferentes deixam o varal orgânico */
  stringPx: number;
  /** Inclinação de repouso da etiqueta, em graus */
  tilt: number;
  cta?: { label: string; href: string };
};

const features: Feature[] = [
  {
    title: "PP ao Plus Size",
    desc: "Curadoria inclusiva que valoriza as curvas e a maturidade feminina com elegância.",
    featured: true,
    stringPx: 36,
    tilt: -2.5,
  },
  {
    title: "Envio Nacional",
    desc: "Enviamos para todo o Brasil com logística segura e cuidado em cada detalhe.",
    stringPx: 84,
    tilt: 1.5,
  },
  {
    title: "Atendimento VIP",
    desc: "Consultoria personalizada via WhatsApp para encontrar o caimento perfeito para você.",
    stringPx: 52,
    tilt: -1,
    cta: { label: "Falar no WhatsApp", href: WHATSAPP_URL },
  },
];

/** Recorte clássico de etiqueta: cantos superiores chanfrados. */
const TAG_SHAPE =
  "polygon(26px 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%, 0 26px)";

const HangTag = ({ feature, index }: { feature: Feature; index: number }) => {
  const { title, desc, featured, stringPx, tilt, cta } = feature;

  return (
    <motion.li
      className="relative list-none [--string:28px] md:mt-(--string) md:[--string:var(--string-md)]"
      style={{ ["--string-md" as string]: `${stringPx}px`, transformOrigin: "50% calc(-1 * var(--string))" }}
      // Único momento de movimento da seção: as etiquetas "balançam" ao entrar na tela
      initial={{ opacity: 0, rotate: tilt - 9 }}
      whileInView={{ opacity: 1, rotate: tilt }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        opacity: { duration: 0.4, delay: index * 0.12 },
        rotate: { type: "spring", stiffness: 60, damping: 7, delay: index * 0.12 },
      }}
      whileHover={{ rotate: 0, transition: { type: "spring", stiffness: 120, damping: 10 } }}
    >
      {/* Nó do fio (no mobile é o ponto de fixação; no desktop fica sobre o varal) */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-400"
        style={{ top: "calc(-1 * var(--string))" }}
      />
      {/* Fio que sobe até o varal */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 w-px -translate-x-1/2 bg-zinc-400/70"
        style={{ top: "calc(-1 * var(--string))", height: "calc(var(--string) + 30px)" }}
      />

      {/* drop-shadow no wrapper: funciona mesmo com o clip-path do filho */}
      <div className="drop-shadow-[0_14px_24px_rgba(60,20,58,0.12)]">
        <article
          className={`relative px-7 pt-14 pb-8 sm:px-9 md:min-h-[340px] lg:px-10 ${
            featured ? "text-white" : "bg-white text-zinc-900"
          }`}
          style={{ clipPath: TAG_SHAPE, backgroundColor: featured ? PRIMARY : undefined }}
        >
          {/* Ilhós da etiqueta */}
          <span
            aria-hidden="true"
            className={`absolute left-1/2 top-[22px] h-4 w-4 -translate-x-1/2 rounded-full ring-1 ${
              featured ? "ring-white/50" : "ring-zinc-300"
            }`}
            style={{ backgroundColor: SECTION_BG }}
          />

          <h3
            className="text-center text-lg font-bold uppercase tracking-[0.18em] md:text-xl"
            style={{ fontFamily: FONT_UI }}
          >
            {title}
          </h3>

          {/* Linha de costura */}
          <div
            aria-hidden="true"
            className={`mx-auto my-6 w-full border-t border-dashed ${
              featured ? "border-white/45" : "border-zinc-300"
            }`}
          />

          <p
            className={`mx-auto max-w-[32ch] text-center text-[15px] font-medium leading-7 md:text-base ${
              featured ? "text-white/90" : "text-zinc-600"
            }`}
            style={{ fontFamily: FONT_DISPLAY }}
          >
            {desc}
          </p>

          {cta && (
            <div className="mt-6 text-center">
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-bold underline decoration-[#af18a6]/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-[#af18a6] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#af18a6]"
                style={{ fontFamily: FONT_UI, color: PRIMARY }}
              >
                {cta.label}
              </a>
            </div>
          )}
        </article>
      </div>
    </motion.li>
  );
};

export const Features = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="sobre"
        aria-labelledby="pilares-titulo"
        className="overflow-hidden py-20 text-zinc-900 md:py-28"
        style={{ backgroundColor: SECTION_BG }}
      >
        <div className="mx-auto w-full max-w-6xl px-5 md:px-12">
          {/* Cabeçalho */}
          <header className="max-w-xl">
            <span
              className="mb-3 block text-[11px] font-bold uppercase tracking-[0.35em] md:mb-4"
              style={{ fontFamily: FONT_UI, color: PRIMARY }}
            >
              Nossos Pilares
            </span>
            <h2
              id="pilares-titulo"
              className="text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tighter text-zinc-900 md:text-6xl lg:text-7xl"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Excelência <br />
              <span className="font-light italic" style={{ color: PRIMARY }}>
                nos detalhes
              </span>
            </h2>
          </header>

          {/* Varal + etiquetas */}
          <div className="relative mt-16 md:mt-20">
            {/* Varal (desktop): cordão horizontal com as pontas presas */}
            <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden md:block">
              <div className="h-px w-full bg-zinc-400/70" />
              <span className="absolute -left-1 -top-[3px] h-[7px] w-[7px] rounded-full bg-zinc-400" />
              <span className="absolute -right-1 -top-[3px] h-[7px] w-[7px] rounded-full bg-zinc-400" />
            </div>

            <ul className="grid grid-cols-1 gap-14 pt-8 sm:mx-auto sm:max-w-md md:max-w-none md:grid-cols-3 md:items-start md:gap-6 md:pt-0 lg:gap-10">
              {features.map((feature, i) => (
                <HangTag key={feature.title} feature={feature} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};
