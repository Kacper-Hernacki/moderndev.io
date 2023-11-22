import React from "react";
import { Footer, Navbar } from "@/components";

export default function CoursesLayout({
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