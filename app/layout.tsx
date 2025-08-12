import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "About me | Sobre mi | Diego Hernández",
  description:
    "Portafolio de Diego Hernández, especializado en Desarrollo Web, Desarrollo Android y servidores Linux. Portafolio creado con Next JS, Typescript, Tailwind CSS, con ayuda de v0",
  authors: [{ name: "Diego Hernández", url: "https://kabash.carrd.co" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
