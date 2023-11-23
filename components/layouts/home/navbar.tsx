import React from "react";
import Image from "next/image";
import Logo from "@/public/moderndev-logo.png";
import Link from "next/link";

interface NavbarProps {
  isLoggedIn: boolean;
}
export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false }) => {

  return (
    <div className="navbar bg-transparent pr-4 absolute z-10">
      <div className="flex-1">
        <Link href={"/"}>
          <Image className="w-16 m-5 cursor-pointer" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link href={'/courses'} className="cursor-pointer text-xl menu-title text-white">Courses</Link>
        <Link href={'/lab'} className="cursor-pointer text-xl menu-title text-white">Lab</Link>
        <Link href={'/offer'} className="cursor-pointer text-xl menu-title text-white">Offer</Link>
        <Link target={'_blank'} href={'https://newsletter.moderndev.io/'} className="cursor-pointer text-xl menu-title text-white">Newsletter</Link>

        <div className="form-control">
          <kbd className="kbd">/</kbd>
          <input type="text" placeholder="Search" className="input input-bordered w-36 md:w-auto text-xl" />
        </div>

        {isLoggedIn ?
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/*<img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />*/}
              </div>
            </label>

            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          :
          <button className="btn btn-primary btn-active text-xl">Log In</button>
        }
      </div>
    </div>
  );
};




