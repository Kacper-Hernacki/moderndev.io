import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import React from "react";
import ClientProviders from "@/components/providers/client";
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Dev",
  description: "Become Ultimate Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
      <html lang="en">
      <body className={inter.className}>
      <Navbar isLoggedIn={false} />
      {children}
      <Footer />
      </body>
      </html>
    </ClientProviders>
  );
}
