import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";

interface NavbarProps {
  isLoggedIn: boolean;
}
export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false }) => {

  return (
    <div className="navbar bg-transparent pr-4">
      <div className="flex-1">
        <Image className="w-20 cursor-pointer" src={Logo} alt="logo" />
        <div className="badge badge-accent">beta</div>
      </div>
      <div className="flex-none gap-2">
        <a className="cursor-pointer menu-title gradient-text">Courses</a>
        <a className="cursor-pointer menu-title gradient-text">Lab</a>
        <a className="cursor-pointer menu-title gradient-text">Offer</a>

        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto gradient-input" />
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
          <button className="btn btn-active gradient-button">Log In</button>
        }
      </div>
    </div>
  );
};




