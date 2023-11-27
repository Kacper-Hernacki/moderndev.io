// "use client";
// import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/moderndev-logo.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils";
import React from "react";
import { signOut } from "next-auth/react";

interface NavbarProps {
  isLoggedIn: boolean;
}
export const Navbar: React.FC<NavbarProps> = async ({ isLoggedIn = false }) => {
const session = await getServerSession(authOptions)
  // const [isModalOpen, setModalOpen] = useState(false);
console.log('🚀 ',session)
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  // useEffect(() => {
  //   const handleKeyPress = (e: KeyboardEvent) => {
  //     if (e.key === "/") {
  //       e.preventDefault();
  //       openModal();
  //     }
  //   };
  //
  //   window.addEventListener("keydown", handleKeyPress);
  //
  //   return () => window.removeEventListener("keydown", handleKeyPress);
  // }, []);
  //
  // useEffect(() => {
  //   const handleKeyPress = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       e.preventDefault();
  //       closeModal()
  //     }
  //   };
  //
  //
  //   window.addEventListener("keydown", handleKeyPress);
  //
  //   return () => window.removeEventListener("keydown", handleKeyPress);
  // }, [closeModal]);

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

        {/*<div className="form-control">*/}
        {/*  <kbd className="kbd">/</kbd>*/}
        {/*  <input onClick={openModal} type="text" placeholder="Search" className="input input-bordered w-36 md:w-auto text-xl" />*/}
        {/*</div>*/}

        {session ?
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={session?.user?.image as string} />
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
              <li><button onClick={() => signOut()}>Logout</button></li>
            </ul>
          </div>
          :
          <Link href="/login">
            <button className="btn btn-primary btn-active text-xl">Log In</button>
          </Link>
        }

        {/*{isModalOpen && (*/}
        {/*  <div*/}
        {/*    className="bg-base-100 modal modal-open fixed inset-0 z-50"*/}
        {/*    onClick={closeModal}*/}
        {/*  >*/}
        {/*    <div*/}
        {/*      className="modal-box relative p-4 max-w-sm mx-auto rounded-lg shadow-lg"*/}
        {/*      onClick={(e) => e.stopPropagation()}*/}
        {/*    >*/}
        {/*      This feature is still under development. Maybe you want to help? If so, contribute <Link target="_blank" href="https://github.com/Kacper-Hernacki/moderndev.io"><span className="text-accent">here</span></Link>*/}
        {/*      <div className="modal-action">*/}
        {/*        <button className="btn btn-primary" onClick={closeModal}>Close</button>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*)}*/}

      </div>
    </div>
  );
};




