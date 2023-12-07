import React from "react";
import { CheckIcon } from "lucide-react";
import CheckoutButton from "@/components/subscription/checkout";


interface PricingPlan {
  id: number;
  title: string;
  features: string[];
  price: number;
  badge: boolean;
  priceId?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Free plan",
    features: ["free first 3 lessons of PRO course", "week of a pro plan for tests", "access to discord server"],
    price: 0,
    badge: false,
  },
  {
    id: 0,
    title: "Pro",
    features: ["unlimited access to PRO courses", "access to discord server", "free PRO Notion templates", "free PRO automation schemas", "github private repos access"],
    price: 10,
    priceId: "price_1OJzDYI5mqGKkIumNUsa0CGf",
    badge: true,
  },
];

export default function Pro() {

  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-24 text-2xl md:text-3xl lg:text-5xl xl:text-7xl gradient-span font-bold text-center">
        Pro Subscription
      </h1>
      <div className="flex flex-wrap gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="indicator">
            {plan?.badge ? <span className="indicator-item badge badge-xl badge-secondary">preferred</span> : null}
            <div key={plan.id} className="card w-96 bg-base-100 shadow-xl">
              <div className="stat">
                <div className="stat-title">Price</div>
                <div className="stat-value">{plan?.price ?
                  <h3 className="text-primary">{plan?.price}$ <span className="text-sm">/monthly</span></h3> :
                  <h3 className="text-primary">Free</h3>}</div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{plan.title || "Default Title"}</h2>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li className="flex items-center" key={index}>
                      <CheckIcon className="mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
                {/*@ts-ignore*/}
                {plan?.priceId ?
                  <CheckoutButton priceId={plan?.priceId} />
                  :
                  null
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

