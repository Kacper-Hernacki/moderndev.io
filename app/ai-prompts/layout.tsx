import React from "react";
export default function AiPromptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-60 grid place-content-center w-screen h-screen">
      {children}
    </div>
  );
}