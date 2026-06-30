import type { Metadata, Viewport } from "next"
import { Inter, Vazirmatn } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { CursorEffect } from "@/components/cursor-effect"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mohammad Jalalabadi — Frontend Developer",
  description:
    "Frontend Developer with 4+ years of experience building interactive, performant web apps with React.js and Next.js. UI/UX, performance optimization, SEO, and CMS integration.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Mohammad Jalalabadi", "Mashhad"],
  authors: [{ name: "Mohammad Jalalabadi" }],
  openGraph: {
    title: "Mohammad Jalalabadi — Frontend Developer",
    description: "Building fast, accessible, and beautiful interfaces with React & Next.js.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${vazirmatn.variable}`}>
      <body>
        <LanguageProvider>
          <CursorEffect />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
