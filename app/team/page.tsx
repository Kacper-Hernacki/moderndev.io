import Link from "next/link";
import DiscordIcon from '@/public/icons/discord.svg'
import Image from "next/image";
export default function Team() {
  return (
    <div className="">
      <h1 className="gradient-span text-5xl font-bold">Join Moderndev team on Discord</h1>
      <div className="flex-col justify-center text-white">
        <div className="grid place-content-center">
          <p>Do you want to discuss different topics? Ask for advices? Or even hire somebody or find a job? </p>
          <Link target="_blank" href="https://discord.gg/BRGpGhqANH">
            <button className="btn discord-button mt-10 text-white">
              <Image width={32} src={DiscordIcon} alt="discord" />
              Join the server
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
