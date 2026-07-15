const WHATSAPP_URL = "https://wa.me/5551999166262";

/**
 * Botão flutuante do WhatsApp.
 * - Mobile: 56px (área de toque confortável), respeita a área segura do iPhone.
 * - Desktop: ao passar o mouse, expande e mostra "Fale conosco".
 * - Anel de destaque pulsa só 3 vezes ao carregar (sem distrair depois)
 *   e não anima com "reduzir movimento" ativo.
 */
const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed right-4 z-50 flex h-14 items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-8px_rgba(37,211,102,0.65)] transition-[transform,background-color,box-shadow] duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] md:right-6 md:bottom-6 md:h-[60px] [@media(hover:hover)]:hover:bg-[#1ebe5a] [@media(hover:hover)]:hover:shadow-[0_14px_34px_-8px_rgba(37,211,102,0.8)]"
    >
      {/* Anel pulsante (3x) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-[ping_1.6s_cubic-bezier(0,0,0.2,1)_1s_3] motion-reduce:hidden"
      />

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center md:h-[60px] md:w-[60px]">
        <svg aria-hidden="true" className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.955c-.001 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </span>

      {/* Rótulo que expande no hover (só em dispositivos com mouse) */}
      <span
        aria-hidden="true"
        className="relative hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 [@media(hover:hover)]:block [@media(hover:hover)]:group-hover:max-w-40 [@media(hover:hover)]:group-hover:pr-6 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:max-w-40 [@media(hover:hover)]:group-focus-visible:pr-6 [@media(hover:hover)]:group-focus-visible:opacity-100"
        style={{ fontFamily: "var(--font-barlow), sans-serif" }}
      >
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
