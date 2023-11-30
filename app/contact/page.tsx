import React from "react";
import Image from "next/image";
import DiscordIcon from "@/public/icons/discord.svg";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex-col">
      <h1 className="mb-8 text-5xl font-bold gradient-span text-center">Contact</h1>
      <div className="flex-col justify-center">
        <h3 className="my-2 text-xl font-bold">E-mail: <span className="text-gray-400">hello@moderndev.io</span></h3>
        <div className="grid place-content-center">
          <Link target="_blank" href="https://discord.gg/BRGpGhqANH">
            <button className="btn discord-button mt-10 text-white">
              <Image width={32} src={DiscordIcon} alt="discord" />
              Discord Server
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
