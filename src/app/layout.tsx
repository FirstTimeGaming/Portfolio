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

const siteUrl = "https://cwaz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — ${site.title}`,
  description:
    "Software engineer in Jupiter, FL. TypeScript platforms, data pipelines, and AI product work.",
  applicationName: "cwaz.dev",
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
      "Software engineer in Jupiter, FL. TypeScript platforms, data pipelines, and AI product work.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "cwaz.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description:
      "Software engineer in Jupiter, FL. TypeScript platforms, data pipelines, and AI product work.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: siteUrl,
  jobTitle: site.title,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jupiter",
    addressRegion: "FL",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: site.education.school,
  },
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono tracking-[0.02em] text-ink bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ToastProvider>
          <SmoothHashScroll />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
