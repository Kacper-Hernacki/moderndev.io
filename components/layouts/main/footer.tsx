import React from "react";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import packageJson from "@/package.json";

const appVersion = packageJson.version || "1.0.0";
export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <nav className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Link href={'/about'}>About</Link>
        <Link href={'/tags'}>Tags</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link href={'/offer'}>Offer</Link>
        <Link href={'/courses'}>Courses</Link>
        <Link href={'/products'}>Products</Link>
        <Link target="_blank" href={'https://newsletter.moderndev.io'}>Newsletter</Link>
        <Link href={'/team'}>Team</Link>
        <Link href={'/privacy'}>Privacy</Link>
        <Link href={'/terms'}>Terms</Link>
        <Link href={'/faq'}>FAQ</Link>
        <Link href={'/cookies'}>Cookies</Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link target="_blank" href={'https://www.instagram.com/kacper.hernacki/'}>
            <Instagram />
          </Link>
          <Link target="_blank" href={'https://www.youtube.com/channel/UCTi-LX8VSgD_It9jDf8lpDQ'}>
            <Youtube />
          </Link>
          <Link target="_blank" href={'https://twitter.com/KacperHernacki'}>
            <Twitter />
          </Link>
          <Link target="_blank" href={'https://www.linkedin.com/in/kacper-hernacki-965161203/'}>
            <Linkedin />
          </Link>
          <Link target="_blank" href={'https://github.com/Kacper-Hernacki'}>
            <Github />
          </Link>
        </div>
      </nav>

      <aside>
        <p> Version {appVersion}</p>
        <nav>
          <p>
            Do you see bugs? Contribute{" "}
            <Link target="_blank" href="https://github.com/Kacper-Hernacki/moderndev.io">
              <span className="gradient-span">here</span>
            </Link>
          </p>
        </nav>
        <p>Copyright © 2023 - All right reserved by moderndev.io</p>
      </aside>
    </footer>
  )
};
