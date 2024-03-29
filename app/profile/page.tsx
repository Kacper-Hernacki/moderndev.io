import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/config";
import { NextPage } from "next";
import React from "react";
import ManageAccountButton from "@/components/subscription/manage";
import { DeleteModal } from "@/components/profile";
import { useSubscriptionStore } from "@/store/store";



const Profile: NextPage = async () => {
  const session: Session | null = await getServerSession(authOptions);
  const { name, email, image } = session?.user ?? {};

  return (
    <div className="flex-col">
      <h1 className="mb-8 text-5xl font-bold gradient-span">Profile</h1>
      <div className="flex-col">
        <h1 className="mb-8 text-3xl font-bold text-gray-400">{name}</h1>
        <h3 className="my-2 text-xl font-bold">User ID: <span className="text-gray-400">GYGUIYG898</span></h3>
        <h3 className="my-2 text-xl font-bold">Account Email: <span className="text-gray-400">{email}</span></h3>
      </div>
      <button className="my-8 btn btn-secondary text-xl">Sign Out</button>
      {/*<div className="my-8">*/}
      {/*  <h1 className="mb-8 text-5xl font-bold">Manage Account</h1>*/}
      {/*  <ManageAccountButton />*/}
      {/*</div>*/}
      <DeleteModal />
    </div>
  );
};

export default Profile;
