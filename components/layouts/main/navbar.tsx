import Image from "next/image";
import Logo from "@/public/moderndev-logo.png";
import Link from "next/link";
import React from "react";
import { UserNav } from "@/components/layouts/main/items";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config";

export const Navbar = async () => {
  const session = await getServerSession(authOptions);


  return (
    <div className="navbar bg-transparent pr-4 absolute z-10">
      <div className="flex-1">
        <Link href={"/"}>
          <Image className="w-16 m-5 cursor-pointer" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link href={"/courses"} className="cursor-pointer text-xl menu-title text-white">Courses</Link>
        <Link href={"/lab"} className="cursor-pointer text-xl menu-title text-white">Lab</Link>
        <Link href={"/offer"} className="cursor-pointer text-xl menu-title text-white">Offer</Link>
        <Link target={"_blank"} href={"https://newsletter.moderndev.io/"} className="cursor-pointer text-xl menu-title text-white">Newsletter</Link>
        {/*@ts-ignore*/}
         <UserNav session={session} />
      </div>
    </div>
  );
};




