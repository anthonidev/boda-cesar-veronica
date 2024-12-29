import type { Metadata } from "next";
import "@/styles/globals.css";

import localFont from "next/font/local";
import { Thumbnail } from "@/lib/resources";

const baseUrl = "https://boda-cesar-veronica.vercel.app";
export async function generateMetadata(): Promise<Metadata> {
  const title = "Cesar & Veronica";

  const description =
    "Te invitamos a nuestra boda el 18 de enero de 2025 a las 4:30 pm en la Casa Pretelli - Lurín, te esperamos.";

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    themeColor: "black",
    openGraph: {
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: Thumbnail,
          secureUrl: Thumbnail,
          width: 1200,
          height: 630,
          alt: "Cesar & Veronica",
        },
      ],
      type: "website",
      siteName: "Cesar & Veronica",
    },
  };
}

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
