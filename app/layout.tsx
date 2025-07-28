import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Acerca de mi | Diego Hernández',
  description: 'Portafolio de Diego Hernández, desarrollado de Software especializado en Desarrollo Web, Desarrollo Android y servidores Linux. Portafolio creado con Next JS, Typescript, Tailwind CSS, con ayuda de v0',
  authors: [{ name: "Diego Hernández", url: "https://kabash.carrd.co" }],
  icons: {
    icon: "/favicon.ico", 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
