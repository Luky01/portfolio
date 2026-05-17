import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Braga Zamproni Lima | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Lucas Braga Zamproni Lima, desenvolvedor full stack com foco em automações, sistemas internos, dashboards e integrações.",
  keywords: [
    "Lucas Braga Zamproni Lima",
    "desenvolvedor full stack",
    "automação",
    "sistemas internos",
    "dashboards",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Lucas Braga Zamproni Lima | Desenvolvedor Full Stack",
    description:
      "Sistemas internos, automações e dashboards com foco em clareza operacional e resultado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
