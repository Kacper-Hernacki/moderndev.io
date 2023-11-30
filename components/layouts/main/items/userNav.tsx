"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/layouts/main/items/modal";
import { signOut } from "next-auth/react";
import Image from "next/image";

type Session = {
  user?: {
    image?: string;
    email?: string;
    name?: string;
  };
};

type UserNavProps = {
  session: Session | null;
};

export const UserNav: React.FC<UserNavProps> = ({ session }) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        openModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [closeModal]);

  return (
    <>
      <div className="form-control">
        <kbd className="kbd">/</kbd>
        <input onClick={openModal} type="text" placeholder="Search" className="input input-bordered w-36 md:w-auto text-xl" />
      </div>
      {session ?
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              <Image width={100} height={100} alt="user avatar" src={session?.user?.image as string} />
            </div>
          </label>

          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link href="/profile" className="justify-between">
                <h3 className="text-xl font-bold">Profile</h3>
                <span className="badge badge-md badge-primary">New</span>
              </Link>
            </li>
            <li><Link href="/profile/settings"><h3 className="text-xl font-bold">Settings</h3></Link></li>
            <li>
              <button className="text-xl font-bold text-secondary" onClick={() => signOut()}>Logout</button>
            </li>
          </ul>
        </div>
        :
        <Link href="/login">
          <button className="btn btn-primary btn-active text-xl">Log In</button>
        </Link>
      }

      {isModalOpen && (
        <Modal closeModal={closeModal} />
      )}
    </>
  );
};




