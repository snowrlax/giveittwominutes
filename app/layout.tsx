import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const eightiesComeback = localFont({
  src: [
    { path: "./fonts/EightiesComeback-LightUltraCondensed.otf", style: "normal" },
    { path: "./fonts/EightiesComebackIt-LightUltraCondensed.otf", style: "italic" },
  ],
  variable: "--font-eighties",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShipNext",
  description: "Ship your SaaS in days, not weeks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="giveittwominutes"
      className={`${inter.variable} ${eightiesComeback.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content">
        <div className="noise-overlay " aria-hidden="true" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
