import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pedro Sales Landing Page",
  description: "Professional Landing Page for a psychologist.",
  keywords: [ "Next.js", "TypeScript", "Tailwind CSS", "React"],
  authors: [{ name: "André Hyodo" }],
  openGraph: {
    title: "Pedro Sales Landing Page",
    description: "Professional Landing Page for a psychologist.",
    // url: "",
    siteName: "Pedro Sales Landing Page",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Sales Landing Page",
    description: "Professional Landing Page for a psychologist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
