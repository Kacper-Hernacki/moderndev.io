import React from "react";
export default function AutomationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-60 grid place-content-center w-screen">
      {children}
    </div>
  );
}