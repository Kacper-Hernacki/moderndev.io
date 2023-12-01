import React from "react";

export default function SnippetsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-32 lg:pt-52 px-4 grid place-content-center w-screen max-w-screen-xl ml-auto mr-auto">
    {children}
    </div>
  );
}
