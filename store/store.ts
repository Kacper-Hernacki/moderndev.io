import { create } from "zustand";

interface Subscription {
  paid: boolean;
  validTill: Date;
  userId: string;
}
interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: null,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));