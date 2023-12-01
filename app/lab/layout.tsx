import React from "react";
import { Footer, Navbar } from "@/components";

export default function LabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid pt-40 place-content-center w-screen">
      {children}
    </div>
  );
}