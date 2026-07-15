const brands = [
  "Ellan Moda Íntima",
  "Bruna & Bia Malhas",
  "Vislumbre",
  "Upman",
  "Arazzo",
  "Rala Bela",
];

/** Estrela de 4 pontas usada como separador entre as marcas. */
const Sparkle = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-3 w-3 shrink-0 text-[#af18a6] sm:h-4 sm:w-4 md:h-5 md:w-5"
    fill="currentColor"
  >
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
  </svg>
);

/**
 * Uma "volta" da faixa. São renderizadas duas idênticas lado a lado e a
 * trilha anda -50%: quando a primeira sai, a segunda está no lugar dela,
 * então o loop não tem emenda. A cópia é escondida dos leitores de tela.
 */
const BrandRow = ({ hidden = false }: { hidden?: boolean }) => (
  <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
    {brands.map((brand) => (
      <li key={brand} className="group flex items-center select-none">
        <span
          style={{ fontFamily: "var(--font-quicksand), sans-serif" }}
          className="px-8 text-3xl font-bold uppercase tracking-tighter text-zinc-900 transition-colors duration-500 group-hover:text-[#af18a6] sm:px-12 sm:text-5xl md:px-20 md:text-[max(3rem,5vw)]"
        >
          {brand}
        </span>
        <Sparkle />
      </li>
    ))}
  </ul>
);

export const Brands = () => {
  return (
    <section
      id="marcas"
      aria-label="Marcas"
      className="relative flex items-center overflow-hidden border-y border-zinc-100 bg-[#fdfcfb] py-12 md:py-20"
    >
      {/* Fades laterais */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#fdfcfb] via-[#fdfcfb]/70 to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#fdfcfb] via-[#fdfcfb]/70 to-transparent md:w-48" />

      {/* Fio rosa no topo, centralizado */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-[#af18a6]/50 md:w-40"
      />

      {/*
        Animação em CSS (compositor/GPU) em vez de JS:
        - pausa ao passar o mouse (só em dispositivos com hover real)
        - duração ajustada por tela p/ velocidade parecida (trilha menor no mobile)
        - com "reduzir movimento" ativo, vira uma faixa com rolagem manual
      */}
      <div className="relative w-full motion-reduce:overflow-x-auto motion-reduce:[scrollbar-width:none]">
        <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform [--marquee-duration:25s] md:[--marquee-duration:35s] [@media(hover:hover)]:hover:[animation-play-state:paused] motion-reduce:animate-none">
          <BrandRow />
          <BrandRow hidden />
        </div>
      </div>
    </section>
  );
};
