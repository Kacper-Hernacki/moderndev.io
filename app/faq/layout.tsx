import React from "react";
import { Footer } from "@/components";

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-52 grid place-content-center w-screen max-w-screen-xl ml-auto mr-auto">
      {children}
    </div>
  );
}