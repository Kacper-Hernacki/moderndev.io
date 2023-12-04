"use client"
import React from "react";
import { SnackbarProvider } from "notistack";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="pt-32 lg:pt-52 px-4 grid place-content-center w-screen max-w-screen-xl ml-auto mr-auto">
        {children}
      </div>
    </SnackbarProvider>
  );
}