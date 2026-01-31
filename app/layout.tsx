import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AiPrompterProvider } from "@/context/AiPrompter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "KremorAI",
  description: "Empowering sustainable fashion through the fusion of African heritage and artificial intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <AiPrompterProvider>
          <main>
            {children}
          </main>
        </AiPrompterProvider>
      </body>
    </html>
  );
}