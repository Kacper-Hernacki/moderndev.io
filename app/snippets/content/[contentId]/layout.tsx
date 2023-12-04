import React from "react";

export default function SnippetsContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid place-content-center w-screen max-w-screen-xl ml-auto mr-auto">
      {children}
    </div>
  );
}