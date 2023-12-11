import React from "react";

export default function TagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid place-content-center w-screen max-w-screen-xl h-screen ml-auto mr-auto">
      {children}
    </div>
  );
}