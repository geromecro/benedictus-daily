import type { Metadata, Viewport } from "next";
import { Crimson_Text, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benedictus Daily",
  description: "Compañero espiritual para el itinerario Benedictus - 64 días de crecimiento interior inspirado en San Benito",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Benedictus",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Benedictus Daily",
    title: "Benedictus Daily",
    description: "Compañero espiritual para el itinerario Benedictus",
  },
};

export const viewport: Viewport = {
  themeColor: "#8B4513",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${crimsonText.variable} ${sourceSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
