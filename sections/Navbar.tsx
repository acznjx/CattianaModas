"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551999166262";
const PHONE_LABEL = "51 99916.6262";
const PRIMARY = "#af18a6";

const FONT_DISPLAY = "var(--font-quicksand), sans-serif";
const FONT_UI = "var(--font-barlow), sans-serif";

const navLinks = [
  { href: "#localizacao", label: "Localização" },
  { href: "#footer", label: "Contatos" },
];

/** Breakpoint `md` do Tailwind: acima disso o menu mobile não existe. */
const DESKTOP_QUERY = "(min-width: 768px)";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = true) => {
    setMenuOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Enquanto o menu está aberto: trava o scroll, fecha com Esc,
  // mantém o foco dentro do painel e fecha se a tela virar desktop.
  useEffect(() => {
    if (!menuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      // Focus trap: Tab circula entre o botão do menu e os itens do painel
      const focusables = [
        toggleRef.current,
        ...panelRef.current.querySelectorAll<HTMLElement>("a, button"),
      ].filter(Boolean) as HTMLElement[];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const mq = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (e: MediaQueryListEvent) => e.matches && closeMenu(false);

    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onBreakpoint);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen, closeMenu]);

  return (
    <MotionConfig reducedMotion="user">
      {/* Container Principal: absolute garante que a barra não siga o scroll */}
      <motion.nav
        aria-label="Navegação principal"
        // Só opacidade no <nav>: transform aqui viraria o "containing block"
        // do backdrop `fixed` do menu e o desalinharia durante a animação.
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full z-100 h-20 md:h-28 bg-white flex items-center border-b border-zinc-100 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)]"
      >
        <motion.div
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center relative h-full"
        >

          {/* Lado Esquerdo: Links de Navegação (desktop) */}
          <ul
            className="hidden md:flex gap-6 lg:gap-10 items-center flex-1"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative inline-block py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 transition-colors duration-300 hover:text-[#af18a6] focus-visible:text-[#af18a6] focus-visible:outline-none"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-[#af18a6] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Centro: Identidade Visual (Logo) */}
          <div className="flex-1 md:flex-none flex justify-start md:justify-center">
            <Link
              href="/"
              aria-label="Cattiana Modas — página inicial"
              onClick={() => menuOpen && closeMenu(false)}
              className="relative z-50 block w-28 h-14 min-[380px]:w-32 min-[380px]:h-16 md:w-48 md:h-24 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 rounded-sm transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#af18a6]"
            >
              <Image
                src="https://i.imgur.com/R625ks3.png"
                alt="Cattiana Modas"
                fill
                sizes="(min-width: 768px) 192px, 128px"
                className="object-contain object-left md:object-center brightness-0 scale-[1.6] min-[380px]:scale-[1.8] md:scale-[1.35] lg:scale-[1.6] origin-left md:origin-center"
                priority
              />
            </Link>
          </div>

          {/* Lado Direito: Atendimento WhatsApp + botão do menu (mobile) */}
          <div
            className="flex justify-end items-center gap-1.5 sm:gap-3 flex-1"
            style={{ fontFamily: FONT_UI }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar com a Cattiana Modas no WhatsApp: ${PHONE_LABEL}`}
              className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#af18a6]"
            >
              <div className="hidden sm:flex flex-col items-end leading-none">
                <span className="hidden md:block text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-1 transition-colors duration-300 group-hover:text-zinc-500">
                  Atendimento
                </span>
                <span className="text-[13px] md:text-base font-bold tracking-tight tabular-nums text-black transition-colors duration-300 group-hover:text-[#af18a6]">
                  {PHONE_LABEL}
                </span>
              </div>

              {/* 44px no mobile = área de toque recomendada */}
              <span className="relative flex w-11 h-11 md:w-10 md:h-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-black transition-all duration-300 active:scale-95 group-hover:scale-110 group-hover:border-[#af18a6] group-hover:bg-[#af18a6] group-hover:text-white group-hover:shadow-[0_6px_18px_-6px_rgba(175,24,166,0.6)]">
                <WhatsAppIcon className="w-[18px] h-[18px] md:w-4 md:h-4" />
              </span>
            </a>

            {/* Botão hambúrguer → X */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="md:hidden relative flex w-11 h-11 items-center justify-center rounded-full text-black transition-colors duration-300 active:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#af18a6]"
            >
              <span aria-hidden="true" className="relative block w-5 h-3.5">
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out ${
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-out ${
                    menuOpen ? "w-0 opacity-0" : "w-3/4 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out ${
                    menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* Detalhe Estético: Trapézio Decorativo */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-112.5 h-7 bg-white border-x border-b border-zinc-100 hidden md:block"
            style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 7% 100%)", zIndex: 40 }}
          >
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-16 bg-[#af18a6]/60" />
          </div>
        </motion.div>

        {/* Menu mobile */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Fundo escurecido: toque fora fecha o menu */}
              <motion.div
                key="backdrop"
                aria-hidden="true"
                onClick={() => closeMenu(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden fixed inset-x-0 top-20 bottom-0 -z-10 bg-black/50 backdrop-blur-[2px]"
              />

              <motion.div
                key="panel"
                id={menuId}
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden absolute inset-x-0 top-full max-h-[calc(100svh-5rem)] overflow-y-auto overscroll-contain bg-white border-b border-zinc-100 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
              >
                <ul className="px-4 sm:px-6 pt-2" style={{ fontFamily: FONT_DISPLAY }}>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.06, duration: 0.3 }}
                      className="border-b border-zinc-100"
                    >
                      <Link
                        href={link.href}
                        onClick={() => closeMenu(false)}
                        className="group flex min-h-14 items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.25em] text-zinc-800 transition-colors active:text-[#af18a6] focus-visible:text-[#af18a6] focus-visible:outline-none"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={18}
                          aria-hidden="true"
                          className="text-zinc-300 transition-all duration-300 group-active:text-[#af18a6] group-focus-visible:text-[#af18a6]"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="px-4 sm:px-6 pt-6"
                  style={{ fontFamily: FONT_UI }}
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => closeMenu(false)}
                    className="flex h-14 w-full items-center justify-center gap-3 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_32px_-12px_rgba(175,24,166,0.7)] transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#af18a6]"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
                    <span>
                      WhatsApp <span className="tabular-nums opacity-80">· {PHONE_LABEL}</span>
                    </span>
                  </a>

                  <p className="mt-5 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                    <MapPin size={12} aria-hidden="true" style={{ color: PRIMARY }} />
                    Rua 28 de Fevereiro, 57 · Sapiranga, RS
                  </p>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
};
