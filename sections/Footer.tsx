"use client";

import { ArrowUp } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5551999166262";
const INSTAGRAM_URL = "https://www.instagram.com/cattiana.modas/";
/** Rosa mais claro: mantém contraste legível sobre o preto da etiqueta. */
const PRIMARY_ON_DARK = "#d35ccb";

const FONT_DISPLAY = "var(--font-quicksand), sans-serif";
const FONT_UI = "var(--font-barlow), sans-serif";

const columns = [
  {
    title: "Menu",
    links: [
      { href: "#sobre", label: "Diferenciais" },
      { href: "#localizacao", label: "Localização" },
      { href: "#marcas", label: "Marcas" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { href: WHATSAPP_URL, label: "Atendimento VIP", external: true },
      { href: "#medidas", label: "Guia de Medidas" },
    ],
  },
];

const WhatsAppIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.955c-.001 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

/** lucide-react v1 não traz mais ícones de marcas, por isso o SVG próprio. */
const InstagramIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d35ccb]";

export const Footer = () => {
  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#0a0a0a] pt-16 pb-28 text-zinc-400 selection:bg-[#af18a6] selection:text-white md:pt-20 md:pb-10"
    >
      {/* Linha superior com o detalhe rosa centralizado */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-zinc-900" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 md:w-40"
        style={{ backgroundColor: PRIMARY_ON_DARK }}
      />

      <div className="mx-auto w-full max-w-6xl px-5 md:px-12">
        {/* SEÇÃO PRINCIPAL */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Identidade */}
          <div className="md:col-span-5">
            <p
              className="text-3xl font-light uppercase tracking-tight text-white md:text-4xl"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Cattiana <span className="font-black" style={{ color: PRIMARY_ON_DARK }}>Modas</span>
            </p>
            <p
              className="mt-3 text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-400"
              style={{ fontFamily: FONT_UI }}
            >
              Sapiranga / RS — Curadoria Feminina
            </p>

            {/* Atalhos sociais */}
            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Cattiana Modas"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 transition-colors duration-300 hover:border-[#25D366] hover:text-[#25D366] ${focusRing}`}
              >
                <WhatsAppIcon />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Cattiana Modas"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-300 transition-colors duration-300 hover:border-[#d35ccb] hover:text-[#d35ccb] ${focusRing}`}
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Links e Contatos */}
          <nav
            aria-label="Rodapé"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:col-span-7"
            style={{ fontFamily: FONT_UI }}
          >
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 md:mb-4">
                  {col.title}
                </h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...("external" in l && l.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={`inline-flex min-h-11 items-center text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors duration-300 hover:text-white md:min-h-9 ${focusRing} focus-visible:rounded-sm`}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contato */}
            <div className="col-span-2 sm:col-span-1">
              <h2
                className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] md:mb-4"
                style={{ color: PRIMARY_ON_DARK }}
              >
                Contato
              </h2>
              <ul className="text-base font-bold tracking-tight text-white md:text-sm">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-11 items-center tabular-nums transition-colors duration-300 hover:text-[#d35ccb] md:min-h-9 ${focusRing} focus-visible:rounded-sm`}
                  >
                    51 99916.6262
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-11 items-center transition-colors duration-300 hover:text-[#d35ccb] md:min-h-9 ${focusRing} focus-visible:rounded-sm`}
                  >
                    @cattiana.modas
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-zinc-900 pt-8 text-[11px] font-medium uppercase tracking-wider text-zinc-500 md:mt-16 md:flex-row md:gap-6"
          style={{ fontFamily: FONT_UI }}
        >
          <span className="order-2 md:order-1">© {new Date().getFullYear()} Cattiana Modas.</span>

          <button
            type="button"
            onClick={scrollToTop}
            className={`group order-1 flex min-h-11 items-center gap-2 rounded-full border border-zinc-800 px-5 font-bold text-zinc-300 transition-colors duration-300 hover:border-[#d35ccb] hover:text-white md:order-2 md:min-h-9 md:px-4 ${focusRing}`}
          >
            <ArrowUp
              size={12}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{ color: PRIMARY_ON_DARK }}
            />
            Voltar ao topo
          </button>

          <span className="order-3 text-[10px] tracking-widest text-zinc-500">
            Criado por <span className="font-bold text-zinc-300">acznjx</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
