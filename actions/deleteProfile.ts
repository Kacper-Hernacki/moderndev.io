"use server";
import { authOptions } from "@/config";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { adminAuth, adminDb } from "@/firebase-admin";
import { deleteUser } from "@firebase/auth";

export async function deleteProfile() {
  const session = await getServerSession(authOptions);
  const host = headers().get("host");

  if (!session?.user.id) return console.error("No user id found");

  const { user } = session;
  console.log("🚀 ", session);
  const userDocRef = adminDb.doc(`users/${session.user.id}`);
  const accountDocRef = adminDb.doc(`accounts/${session.user.id}`);
  const doc = await userDocRef.get();
  if (!doc.data) return console.error("No customer record found with userId: ", session?.user.id);

  if (user) {
    await adminAuth.deleteUser(session.user.id);
    console.log("User auth record deleted");
    await userDocRef.delete();
    // @ts-ignore
    deleteUser(user).then(() => {
      console.log("User auth record deleted");
    }).catch((error) => {
      console.error("Error deleting user auth record:", error);
    });
  }

  // redirect(`http://${host}/`);
}