import DiscordIcon from "@/public/icons/discord.svg";
import Image from "next/image";

export default function Team() {
  return (
    <div className="p-4">
      <h1 className="gradient-span text-3xl lg:text-5xl font-bold text-center">Join Moderndev team on Discord</h1>
      <div className="flex-col justify-center text-white">
        <div className="grid place-content-center">
          <p className="mt-4 text-sm lg:text-xl text-center">Do you want to discuss different topics? Ask for advices? Or even hire somebody or find a
            job? </p>
          <a className="max-w-sm mx-auto" target="_blank" href="https://discord.gg/BRGpGhqANH">
            <button className="btn discord-button mt-10 text-white w-full">
              <Image width={32} src={DiscordIcon} alt="discord" />
              Join the server
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
