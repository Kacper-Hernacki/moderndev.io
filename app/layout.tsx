import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import React from "react";
import ClientProviders from "@/components/providers/client";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config";
import FirebaseAuthProvider from "@/components/providers/firebase";
import SnackbarComponentProvider from "@/components/providers/snackbar";
import SubscriptionProvider from "@/components/providers/subscription";
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from "@vercel/analytics/react";


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
      <NextTopLoader
        easing="ease"
        showSpinner={false}/>
      <FirebaseAuthProvider>
        <SubscriptionProvider>
          <SnackbarComponentProvider>
            {/*@ts-ignore*/}
            <Navbar session={session} />
            {children}
            <Footer />
          </SnackbarComponentProvider>
        </SubscriptionProvider>
      </FirebaseAuthProvider>
      <Analytics />
      </body>
      </html>
    </ClientProviders>
  );
}
