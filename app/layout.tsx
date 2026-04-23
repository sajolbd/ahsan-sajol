import type { Metadata } from "next";
import "./globals.css";


import ClientLayout from "./client-layout";

import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "components/layout/Navbar";

/* ---------------- FONTS ---------------- */

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

/* ---------------- METADATA ---------------- */

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tripvienlaw.com"),
  title: "Ahsan Sajol",
  description: "Ahsan Sajol Website",
  openGraph: {
    title: "Ahsan Sajol",
    description: "Ahsan Sajol Website",
    url: "https://www.tripvienlaw.com/",
    siteName: "Ahsan Sajol",
    locale: "en_US",
    type: "website",
  },
};


/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmMono.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="bg-white antialiased">
        <Navbar />

        {/* ✅ CLIENT WRAPPER */}
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
