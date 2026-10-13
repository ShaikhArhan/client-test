import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteStructuredData } from "@/components/site-structured-data";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Vela AI Chatbot | AI customer support",
    template: "%s | Vela AI Chatbot",
  },
  description:
    "Vela's AI chatbot answers customer questions from your help content, books meetings, and hands complex conversations to your team.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Vela AI Chatbot | AI customer support",
    description:
      "Answer customer questions, book meetings, and hand complex conversations to your support team with Vela.",
    url: "/",
    siteName: "Vela AI Chatbot",
    locale: "en",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-background font-sans text-ink">
        <SiteStructuredData />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
