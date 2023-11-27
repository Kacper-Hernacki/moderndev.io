"use client"
import { signIn } from "next-auth/react";

export default function LoginComponent() {

  return (
    <main>
      <button onClick={()=> signIn()}>Sign In</button>
  </main>
  );
}
