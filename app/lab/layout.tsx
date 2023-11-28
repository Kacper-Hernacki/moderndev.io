import React from "react";
import { Footer, Navbar } from "@/components";

export default function LabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid place-content-center w-screen h-screen">
      {children}
    </div>
  );
}