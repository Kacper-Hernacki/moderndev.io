"use client"
import React from "react";
import { SnackbarProvider } from "notistack";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="pt-32 lg:pt-44 px-4 grid place-content-center w-screen max-w-screen-2xl ml-auto mr-auto">
        {children}
      </div>
  );
}