import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SmoothHashScroll } from "@/components/SmoothHashScroll";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chase Wasalaski — Software Engineer",
  description:
    "Software engineer in Jupiter, FL. Production TypeScript platforms, data pipelines, and AI product work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono tracking-[0.02em] text-ink bg-cream">
        <SmoothHashScroll />
        {children}
      </body>
    </html>
  );
}
