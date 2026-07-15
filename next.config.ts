import type { NextConfig } from "next";

/**
 * Cabeçalhos de segurança aplicados a TODAS as respostas (páginas e assets).
 * A Content Security Policy fica em proxy.ts, porque precisa de um nonce
 * novo a cada requisição.
 */
const securityHeaders = [
  // Força HTTPS por 2 anos, inclusive subdomínios (elegível à preload list)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Impede o navegador de "adivinhar" o tipo de arquivo (MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Bloqueia o site dentro de iframes de terceiros (clickjacking) — reforço do frame-ancestors
  { key: "X-Frame-Options", value: "DENY" },
  // Envia só a origem (sem caminho) para outros sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desliga APIs sensíveis que o site não usa
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), " +
      "magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=()",
  },
  // Isola a janela de popups/abas abertas por outros sites (ataques tipo XS-Leaks)
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Nossos recursos só podem ser carregados pelo próprio site
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig: NextConfig = {
  // Não anuncia "X-Powered-By: Next.js" (menos informação para fingerprinting)
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    /*
     * Allowlist EXATA das imagens remotas. Sem isso, qualquer pessoa poderia
     * usar /_next/image como proxy para otimizar imagens arbitrárias
     * (vetor de SSRF, abuso de CPU e das falhas críticas de AVIF no sharp).
     */
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-1441984904996-e0b6ba687e04" },
      { protocol: "https", hostname: "i.imgur.com", pathname: "/R625ks3.png" },
    ],
    // Só gera WebP: evita o pipeline de AVIF afetado pela falha do libheif
    formats: ["image/webp"],
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
