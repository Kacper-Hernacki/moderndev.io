import React from "react";
import { Footer, Navbar } from "@/components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*TODO: Add auth*/}
      <Navbar isLoggedIn={false} />
        {children}
      <Footer />
    </>
  );
}