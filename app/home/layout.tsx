import React from "react";
import { Footer, Navbar } from "@/components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
    </>
  );
}