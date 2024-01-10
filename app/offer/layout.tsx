import React from "react";

export default function OfferLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="lg:pt-12 px-4 grid place-content-center w-screen max-w-screen-xl ml-auto mr-auto">
      {children}
    </div>
  );
}