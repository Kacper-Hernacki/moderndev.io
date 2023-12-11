"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { onSnapshot } from "@firebase/firestore";
import { useSubscriptionStore } from "@/store/store";
import { subscriptionRef } from "@/lib/converters/subscription";
import * as NProgress from "nprogress";
import { usePathname } from "next/navigation";

export default function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session } = useSession();
  const setSubscription = useSubscriptionStore(state => state.setSubscription);
  const pathname = usePathname()

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  useEffect(() => {
    if (!session) return;

    return onSnapshot(subscriptionRef(session?.user?.id), (snapshot) => {
      if (snapshot?.empty) {
        console.log("User has NO subscription");
        setSubscription(null);
        return;
      } else {
        console.log("user has subscription");
        setSubscription(snapshot?.docs[0].data());
      }
    }, (err: Error) => {
      console.error(err);
    });

  }, [session, setSubscription]);

  return (
    <>
      {children}
    </>
  );
}