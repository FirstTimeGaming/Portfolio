import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SmoothHashScroll } from "@/components/SmoothHashScroll";
import { ToastProvider } from "@/components/ui/Toast";
import { site } from "@/content/site";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description:
    "Software engineer in Jupiter, FL. Production TypeScript platforms, data pipelines, and AI product work.",
  keywords: [
    site.name,
    "Chase",
    "Wasalaski",
    site.title,
    "Portfolio",
    site.location,
    "Florida",
    "Florida Polytechnic University",
    "Computer Science",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Drizzle ORM",
    "tRPC",
    "Python",
    "AWS",
    "AWS Lambda",
    "SQS",
    "S3",
    "ECS",
    "EC2",
    "CloudWatch",
    "Plaid",
    "AI engineering",
    "AWS Bedrock",
    "data pipelines",
    "fintech",
    "full stack engineer",
    "backend engineer",
    "platform engineer",
    "cwaz.dev",
    "National Breathe Free",
    "LumiFi",
    "LumiFi AI",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description:
      "Production TypeScript platforms, data pipelines, and AI product work from Jupiter, FL.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono tracking-[0.02em] text-ink bg-cream">
        <ToastProvider>
          <SmoothHashScroll />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
