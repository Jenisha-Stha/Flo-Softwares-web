import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLO Softwares - Innovating Through Software",
  description:
    "FLO Softwares delivers cutting-edge software solutions including web development, mobile apps, UI/UX design, and enterprise software. Based in Lalitpur, Nepal.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "UI/UX design",
    "Nepal",
    "Lalitpur",
    "FLO Softwares",
  ],
  authors: [{ name: "FLO Softwares" }],
  openGraph: {
    title: "FLO Softwares - Innovating Through Software",
    description:
      "Cutting-edge software solutions that transform businesses and drive digital innovation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
