import type { Metadata } from "next";
import "@/styles/globals.css";

import localFont from "next/font/local";
export const metadata: Metadata = {
  title: "Cesar & Veronica",
  description: "Cesar & Veronica se casan",
};

const Helvetica = localFont({
  src: "../fonts/HelveticaNowDisplayMedium.ttf",
  display: "swap",
  variable: "--font-helvetica",
});

const BirdsOfParadise = localFont({
  src: "../fonts/BirdsOfParadise.ttf",
  display: "swap",
  variable: "--font-birds-of-paradise",
});

const BrightLarch = localFont({
  src: "../fonts/BrightLarch.ttf",
  display: "swap",
  variable: "--font-bright-larch",
});

const Amarillo = localFont({
  src: "../fonts/Amarillo.ttf",
  display: "swap",
  variable: "--font-amarillo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${Helvetica.variable} ${Amarillo.variable} ${BrightLarch.variable} ${BirdsOfParadise.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
