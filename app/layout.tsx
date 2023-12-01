import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import React from "react";
import ClientProviders from "@/components/providers/client";
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import { getServerSession } from "next-auth";
import { authOptions } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Developer",
  description: "Become Ultimate Developer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <ClientProviders>
      <html lang="en">
      <body className={inter.className}>
      {/*@ts-ignore*/}
      <Navbar session={session} />
      {children}
      <Footer />
      </body>
      </html>
    </ClientProviders>
  );
}
