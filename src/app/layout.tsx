import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins como fonte padrão de todo o projeto (via variável CSS e className)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linkfotos AI — Fotos profissionais para o LinkedIn",
  description:
    "Transforme suas fotos em retratos profissionais com inteligência artificial.",
};

// Garante escala correta em dispositivos móveis (evita zoom indesejado)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} h-full antialiased`}
    >
      {/* overflow-x-hidden evita rolagem horizontal em telas estreitas */}
      <body
        className={`${poppins.className} flex min-h-full flex-col overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
