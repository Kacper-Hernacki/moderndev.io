import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import React from "react";
import ClientProviders from "@/components/providers/client";

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
