import React from "react";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {

  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''}>Offer</Link>
        <Link href={''}>Courses</Link>
        <Link href={''}>Offer</Link>
        <Link href={''}>Products</Link>
        <Link href={''}>Newsletter</Link>
        <Link href={''}>Team</Link>
        <Link href={''}>Privacy</Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href={''}>
            <Instagram />
          </Link>
          <Link href={''}>
            <Youtube/>
          </Link>
          <Link href={''}>
            <Twitter/>
          </Link>
          <Link href={''}>
            <Linkedin />
          </Link>
       </div>
      </nav>
      <aside>
        <nav>
          Do you see bugs? Contribute <Link href="https://github.com/">here</Link>
        </nav>
        <p>Copyright © 2023 - All right reserved by moderndev.io</p>
      </aside>
    </footer>
  )
};




