import type { Metadata } from "next";
import "./globals.css";

import ClientLayout from "./client-layout";

import { Josefin_Sans } from "next/font/google";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";

/* ---------------- FONTS ---------------- */

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

/* ---------------- METADATA ---------------- */

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://ahsan-sajol.vercel.app/"),
  title: "Ahsan Sajol | Full Stack Developer & SEO Expert",
  description: "Full Stack Software Engineer & SEO Expert specializing in Next.js, TypeScript, and high-performance web applications that rank and convert.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ahsan Sajol | Full Stack Developer & SEO Expert",
    description: "Full Stack Software Engineer & SEO Expert specializing in Next.js, TypeScript, and high-performance web applications that rank and convert.",
    url: "https://ahsan-sajol.vercel.app/",
    siteName: "Ahsan Sajol",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Sajol | Full Stack Developer & SEO Expert",
    description: "Full Stack Software Engineer & SEO Expert specializing in Next.js, TypeScript, and high-performance web applications that rank and convert.",
  },
  other: {
    "og:updated_time": new Date().toISOString(),
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
      className={josefinSans.variable}
    >
      <body className="bg-white antialiased">
        <Navbar />

        {/* ✅ CLIENT WRAPPER */}
        <ClientLayout>
          <main>{children}</main>
        </ClientLayout>

        <Footer />
      </body>
    </html>
  );
}
