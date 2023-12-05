"use client";

import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";

export const UpgradeBanner = () => {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.role === "pro";
  const router = useRouter();

  if (subscription === undefined || isPro) return null;

  return (
    <div>
      <button className="btn btn-accent btn-sm">Upgrade to PRO</button>
    </div>
  );
};
