"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const PRIMARY = "#af18a6";
const TAPE_BG = "#fbeefa";
const FONT_DISPLAY = "var(--font-quicksand), sans-serif";
const FONT_UI = "var(--font-barlow), sans-serif";

const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=Rua+28+de+Fevereiro+57+Sapiranga";
const IFRAME_MAPS_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.8071661645396!2d-51.01188372403212!3d-29.63836151322047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951939efaf0a867b%3A0x6b9ff0185987f2b9!2sR.%2028%20de%20Fevereiro%2C%2057%20-%20Centro%2C%20Sapiranga%20-%20RS%2C%2093800-000!5e0!3m2!1spt-BR!2sbr!4v1717942400000!5e0";

/* ------------------------------------------------------------------ */
/* Guia de Medidas                                                     */
/* ------------------------------------------------------------------ */

const measures = [
  {
    name: "Busto",
    desc: "Contorne o busto na parte mais larga. Mantenha a fita firme, mas sem apertar a pele.",
  },
  {
    name: "Cintura",
    desc: "Meça a parte mais estreita da sua cintura, logo acima do umbigo, de forma relaxada.",
  },
  {
    name: "Quadril",
    desc: "Contorne a região com maior largura dos glúteos para garantir o conforto ao sentar e andar.",
  },
];

/** Marcações da fita: traço fino a cada 0,5 cm e traço maior a cada 1 cm (aqui 8px = 1 "cm"). */
const TICKS_H =
  "repeating-linear-gradient(90deg, rgba(63,63,70,0.55) 0 1px, transparent 1px 8px)";
const TICKS_V =
  "repeating-linear-gradient(180deg, rgba(63,63,70,0.55) 0 1px, transparent 1px 8px)";

/** Números da fita (cm). Só decorativos — escondidos de leitores de tela. */
const TapeNumbers = ({ vertical = false }: { vertical?: boolean }) => (
  <div
    aria-hidden="true"
    className={`absolute flex ${
      vertical ? "inset-y-0 right-1.5 flex-col" : "inset-x-0 bottom-1"
    }`}
    style={{ fontFamily: FONT_UI }}
  >
    {Array.from({ length: 160 }, (_, i) => (
      <span
        key={i}
        className={`shrink-0 text-[9px] font-bold tabular-nums text-zinc-500 ${
          vertical ? "h-10 leading-none" : "w-10 pl-0.5"
        }`}
      >
        {i + 1}
      </span>
    ))}
  </div>
);

/** A fita métrica. Desenrola uma única vez quando entra na tela. */
const Tape = ({ vertical = false, className = "" }: { vertical?: boolean; className?: string }) => (
  <motion.div
    aria-hidden="true"
    initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
    whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    className={`relative overflow-hidden shadow-[0_6px_16px_-8px_rgba(175,24,166,0.35)] ${
      vertical ? "w-11 origin-top border-x" : "h-12 origin-left border-y"
    } border-[#af18a6]/25 ${className}`}
    style={{ backgroundColor: TAPE_BG }}
  >
    {/* traços curtos */}
    <div
      className={`absolute ${vertical ? "inset-y-0 left-0 w-[30%]" : "inset-x-0 top-0 h-[30%]"}`}
      style={{ backgroundImage: vertical ? TICKS_V : TICKS_H }}
    />
    {/* traços longos (a cada 40px) */}
    <div
      className={`absolute ${vertical ? "inset-y-0 left-0 w-[55%]" : "inset-x-0 top-0 h-[55%]"}`}
      style={{
        backgroundImage: vertical
          ? "repeating-linear-gradient(180deg, rgba(63,63,70,0.8) 0 1px, transparent 1px 40px)"
          : "repeating-linear-gradient(90deg, rgba(63,63,70,0.8) 0 1px, transparent 1px 40px)",
      }}
    />
    <TapeNumbers vertical={vertical} />
  </motion.div>
);

const SizeGuide = () => (
  <section
    id="medidas"
    aria-labelledby="medidas-titulo"
    className="overflow-hidden bg-white py-20 text-zinc-900 md:py-28"
  >
    <div className="mx-auto w-full max-w-6xl px-5 md:px-12">
      {/* Cabeçalho */}
      <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <span
            className="mb-3 block text-[11px] font-bold uppercase tracking-[0.35em] md:mb-4"
            style={{ fontFamily: FONT_UI, color: PRIMARY }}
          >
            Guia de Medidas
          </span>
          <h2
            id="medidas-titulo"
            className="text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            O ajuste <br />
            <span className="font-light italic" style={{ color: PRIMARY }}>
              Perfeito
            </span>
          </h2>
        </div>
        <p
          className="max-w-md text-[15px] leading-7 text-zinc-600 md:col-span-5 md:text-base"
          style={{ fontFamily: FONT_DISPLAY }}
        >
          Para mulheres que buscam elegância e conforto. Descubra seu tamanho ideal e sinta-se
          confiante com o caimento de nossas peças.
        </p>
      </div>

      {/* Fita + medidas. Mobile: fita vertical à esquerda. Desktop: fita horizontal em cima. */}
      <div className="relative mt-14 md:mt-20">
        <Tape vertical className="absolute inset-y-0 left-0 md:hidden" />
        <Tape className="hidden w-full md:block" />

        <ol className="grid grid-cols-1 gap-10 pl-16 md:grid-cols-3 md:gap-10 md:pl-0 md:pt-0 lg:gap-14">
          {measures.map((m, i) => (
            <motion.li
              key={m.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              className="relative py-2 md:pt-12"
            >
              {/* Marcador que "aponta" para a fita */}
              {/* Triângulo apontando para cima; no mobile gira para apontar à esquerda */}
              <svg
                aria-hidden="true"
                viewBox="0 0 14 9"
                className="absolute -left-[24px] top-[19px] h-[9px] w-[14px] -rotate-90 md:left-0 md:top-0 md:rotate-0"
                fill={PRIMARY}
              >
                <path d="M7 0 14 9H0Z" />
              </svg>
              <span
                aria-hidden="true"
                className="absolute left-[7px] top-2 hidden h-8 border-l border-dashed md:block"
                style={{ borderColor: `${PRIMARY}80` }}
              />

              <h3
                className="text-2xl font-bold uppercase tracking-tight md:text-3xl"
                style={{ fontFamily: FONT_UI }}
              >
                {m.name}
              </h3>
              <p
                className="mt-3 max-w-[34ch] text-[15px] leading-7 text-zinc-600"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                {m.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Localização                                                         */
/* ------------------------------------------------------------------ */

/** Horários em minutos desde 00:00, por dia da semana (0 = domingo). */
const OPENING_HOURS: Record<number, [number, number] | null> = {
  0: null,
  1: [9 * 60, 18 * 60 + 30],
  2: [9 * 60, 18 * 60 + 30],
  3: [9 * 60, 18 * 60 + 30],
  4: [9 * 60, 18 * 60 + 30],
  5: [9 * 60, 18 * 60 + 30],
  6: [9 * 60, 16 * 60],
};

/** Dia e minuto atuais no fuso da loja, independente do fuso de quem acessa. */
function nowInStoreTimezone() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

type StoreStatus = { open: boolean; day: number } | null;

/**
 * Calculado só no cliente (após montar) para não gerar diferença de
 * hidratação entre o HTML do servidor e o navegador. Atualiza a cada minuto.
 */
function useStoreStatus(): StoreStatus {
  const [status, setStatus] = useState<StoreStatus>(null);

  useEffect(() => {
    const update = () => {
      const { day, minutes } = nowInStoreTimezone();
      const hours = OPENING_HOURS[day];
      setStatus({ day, open: !!hours && minutes >= hours[0] && minutes < hours[1] });
    };
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}

const StoreLocation = () => {
  const status = useStoreStatus();
  const isWeekday = status !== null && status.day >= 1 && status.day <= 5;
  const isSaturday = status?.day === 6;

  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-titulo"
      className="scroll-mt-4 bg-zinc-100 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-3 flex items-center gap-2 md:mb-4">
              <MapPin size={16} aria-hidden="true" style={{ color: PRIMARY }} />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.35em]"
                style={{ fontFamily: FONT_UI, color: PRIMARY }}
              >
                Visite-nos
              </span>
            </div>

            <h2
              id="localizacao-titulo"
              className="mb-8 text-[2.6rem] font-bold uppercase leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              <span className="block text-zinc-900">No coração de</span>
              <span className="block font-light italic" style={{ color: PRIMARY }}>
                Sapiranga
              </span>
            </h2>

            <div className="mb-10 grid grid-cols-1 gap-8 border-t border-zinc-300/70 pt-8 sm:grid-cols-2">
              <div>
                <h3
                  className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500"
                  style={{ fontFamily: FONT_UI }}
                >
                  Endereço
                </h3>
                <address
                  className="text-base not-italic leading-7 text-zinc-700"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  Rua 28 de Fevereiro, 57 <br />
                  Sala 01 — Centro <br />
                  Sapiranga - RS
                </address>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500"
                    style={{ fontFamily: FONT_UI }}
                  >
                    <Clock size={12} aria-hidden="true" style={{ color: PRIMARY }} /> Atendimento
                  </h3>

                  {/* Status ao vivo (só aparece após calcular no navegador) */}
                  {status && (
                    <span
                      role="status"
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        status.open ? "bg-emerald-50 text-emerald-700" : "bg-zinc-200 text-zinc-600"
                      }`}
                      style={{ fontFamily: FONT_UI }}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          status.open ? "animate-pulse bg-emerald-500 motion-reduce:animate-none" : "bg-zinc-400"
                        }`}
                      />
                      {status.open ? "Aberto agora" : "Fechado agora"}
                    </span>
                  )}
                </div>

                <dl className="text-[15px] text-zinc-700 md:text-base" style={{ fontFamily: FONT_DISPLAY }}>
                  <div
                    className={`grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-zinc-300/50 pb-3 transition-colors ${
                      isWeekday ? "-mx-3 rounded-lg bg-white px-3 pt-2" : ""
                    }`}
                  >
                    <dt className="font-bold text-zinc-800">Segunda a Sexta</dt>
                    <dd className="font-semibold tabular-nums" style={{ color: PRIMARY }}>
                      9h às 18h30
                    </dd>
                    <dd className="col-span-2 mt-0.5 text-xs font-medium text-zinc-500">
                      Sem fechar ao meio-dia
                    </dd>
                  </div>
                  <div
                    className={`flex items-baseline justify-between gap-4 pt-3 ${
                      isSaturday ? "-mx-3 mt-2 rounded-lg bg-white px-3 pb-3" : ""
                    }`}
                  >
                    <dt className="font-bold text-zinc-800">Sábados</dt>
                    <dd className="font-semibold tabular-nums" style={{ color: PRIMARY }}>
                      9h às 16h
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 w-full items-center justify-center gap-4 rounded-full bg-zinc-900 px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:bg-[#af18a6] hover:shadow-[0_12px_32px_-12px_rgba(175,24,166,0.7)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#af18a6] sm:w-auto sm:self-start"
              style={{ fontFamily: FONT_UI }}
            >
              Como Chegar
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="w-full lg:col-span-5">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl border-[6px] border-white bg-zinc-200 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)] sm:aspect-square md:border-8 lg:max-w-none">
              <iframe
                src={IFRAME_MAPS_URL}
                title="Mapa de localização real da loja no Centro de Sapiranga"
                className="h-full w-full border-0 grayscale-[0.2] contrast-[1.05]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                // Sandbox: o mapa roda isolado e não pode navegar a página nem abrir formulários
                sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LocationAndFitting = () => (
  <MotionConfig reducedMotion="user">
    <SizeGuide />
    <StoreLocation />
  </MotionConfig>
);
