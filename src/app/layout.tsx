import type { Metadata } from "next";
import "@/styles/globals.css";

import localFont from "next/font/local";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Cesar & Veronica",
  description:
    "Te invitamos a nuestra boda el 18 de enero de 2025 a las 4:30 pm en la Casa Pretelli - Lurín, te esperamos.",
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
      <Head>
        <meta property="og:title" content="Cesar & Veronica" />
        <meta
          property="og:description"
          content="Te invitamos a nuestra boda el 18 de enero de 2025 a las 4:30 pm en la Casa Pretelli - Lurín, te esperamos."
        />
        <meta property="og:image" content="/imgs/hero2.webp" />
        <meta
          property="og:url"
          content="https://boda-cesar-veronica.vercel.app"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={`${Helvetica.variable} ${Amarillo.variable} ${BrightLarch.variable} ${BirdsOfParadise.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
