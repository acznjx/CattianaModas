import { NextResponse, type NextRequest } from "next/server";

/**
 * Content Security Policy estrita com nonce por requisição.
 *
 * - Scripts: só executam se tiverem o nonce desta resposta ('strict-dynamic'
 *   permite que esses scripts carreguem os chunks do Next). Bloqueia XSS por
 *   injeção de <script> ou handlers inline.
 * - Estilos: <style> só com nonce; atributos style="" liberados porque o React
 *   e o framer-motion usam estilos inline (risco baixo: CSS não executa código).
 * - Iframes: apenas o Google Maps.
 * - frame-ancestors 'none': o site não pode ser embutido em outro (clickjacking).
 *
 * O Next lê o nonce deste cabeçalho e o aplica automaticamente nos próprios
 * scripts. Exige renderização dinâmica (ver `connection()` em app/page.tsx).
 */
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  const directives: Record<string, string[]> = {
    "default-src": ["'self'"],
    "script-src": [
      "'self'",
      `'nonce-${nonce}'`,
      "'strict-dynamic'",
      // React usa eval só em desenvolvimento (stack traces); nunca em produção
      ...(isDev ? ["'unsafe-eval'"] : []),
    ],
    // Em dev o HMR injeta <style> sem nonce
    "style-src": ["'self'", ...(isDev ? ["'unsafe-inline'"] : [`'nonce-${nonce}'`])],
    "style-src-attr": ["'unsafe-inline'"],
    "img-src": ["'self'", "blob:", "data:"],
    "font-src": ["'self'"],
    "connect-src": ["'self'", ...(isDev ? ["ws:", "wss:"] : [])],
    "frame-src": ["https://www.google.com", "https://maps.google.com"],
    "worker-src": ["'self'", "blob:"],
    "manifest-src": ["'self'"],
    "media-src": ["'self'"],
    "object-src": ["'none'"],
    "base-uri": ["'self'"],
    "form-action": ["'self'"],
    "frame-ancestors": ["'none'"],
    ...(isDev ? {} : { "upgrade-insecure-requests": [] }),
  };

  const csp = Object.entries(directives)
    .map(([name, values]) => [name, ...values].join(" "))
    .join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    {
      // Só páginas: assets estáticos e imagens otimizadas não precisam de CSP com nonce
      source: "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
