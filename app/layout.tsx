import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";

export const metadata: Metadata = {
  title: "Webis — Fluid Design. Real Impact.",
  description:
    "Webis is a premium digital agency building stunning websites and web applications. Business websites, portfolios, restaurant sites, and custom web apps. Starting at ₹2,999.",
  keywords: [
    "web design agency",
    "website development",
    "Next.js agency",
    "portfolio website",
    "restaurant website",
    "business website",
    "custom web app",
    "Webis",
  ],
  authors: [{ name: "Webis Digital Agency" }],
  creator: "Webis",
  openGraph: {
    title: "Webis — Fluid Design. Real Impact.",
    description:
      "We don't build websites. We build experiences. Premium digital agency for businesses, portfolios, restaurants, and custom web apps.",
    type: "website",
    locale: "en_IN",
    siteName: "Webis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webis — Fluid Design. Real Impact.",
    description: "Premium digital agency building stunning websites starting at ₹2,999.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
