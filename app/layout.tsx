import type { Metadata } from "next";
import { Inter, Quicksand, Barlow } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const quicksand = Quicksand({ 
  subsets: ["latin"], 
  variable: "--font-quicksand",
  weight: ['300', '400', '500', '700']
});

const barlow = Barlow({ 
  subsets: ["latin"], 
  variable: "--font-barlow",
  weight: ['400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: "Cattiana Modas | Elegância em Sapiranga",
  description: "Curadoria exclusiva de moda feminina. Peças do PP ao Plus Size que unem sofisticação e conforto.",
  keywords: ["Moda Feminina", "Sapiranga", "Boutique", "Cattiana Modas", "Vestuário Premium"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`
        ${inter.variable} 
        ${quicksand.variable} 
        ${barlow.variable} 
        font-sans antialiased bg-white text-zinc-900
      `}>
        {children}
      </body>
    </html>
  );
}