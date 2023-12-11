"use client";

import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const UpgradeBanner = () => {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.status === "active";
  const router = useRouter();

  if (subscription === undefined || isPro) return null;

  return (
    <Link href="/pro">
      <button className="btn btn-accent btn-sm">Upgrade to PRO</button>
    </Link>
  );
};
