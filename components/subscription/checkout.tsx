"use client";
import React, { useState } from "react";
import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import { db } from "@/firebase";
import { useSession } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CheckoutButtonProps {
  priceId: string;
}

export default function CheckoutButton({ priceId }: CheckoutButtonProps) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.status === "active";
  const router = useRouter();
  async function createCheckoutSession(priceId: string | undefined) {
    if (!session?.user.id) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "customers", session.user.id, "checkout_sessions"), {
      price: priceId,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      allow_promotion_codes: true,
    });
//
    return onSnapshot(docRef, snap => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert(`An error occured: ${error?.message}`);
        setLoading(false);
      }

      if (url) {
        router.push(url);
        setLoading(false);
      }
    });

  }

  return (
    <>
      {priceId && !isPro ?
        <div className="card-actions justify-end">
          <button onClick={() => createCheckoutSession(priceId)} className="btn btn-primary">{loading ? "loading..." : "Subscribe"}</button>
        </div>
        :
        <>
          <h3 className="text-secondary">Your current plan</h3>
          <Link href="/profile">
            <button className="btn btn-secondary btn-sm">Manage Subscription</button>
          </Link>
        </>
      }
    </>
  );
}