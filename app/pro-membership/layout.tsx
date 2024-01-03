import React from "react";

export default function ProMembershipLayout({
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