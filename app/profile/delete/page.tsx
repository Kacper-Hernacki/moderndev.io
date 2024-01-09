import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/config";
import { NextPage } from "next";
import React from "react";
import { deleteProfile } from "@/actions/deleteProfile";

const DeleteProfile: NextPage = async () => {
  const session: Session | null = await getServerSession(authOptions);

  return (
    <div className="flex-col">
      <form action={deleteProfile}>
        <button className="btn btn-primary text-xl" type="submit">Delete Profile</button>
      </form>
    </div>
  );
};

export default DeleteProfile;
