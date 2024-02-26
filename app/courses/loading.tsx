"use client"

import { useEffect, useState } from "react";

export default function LoadingSkeleton() {
  const [itemCount, setItemCount] = useState(4);

  useEffect(() => {
    const updateItemCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setItemCount(1);
      } else {
        setItemCount(4);
      }
    };

    updateItemCount();
    window.addEventListener('resize', updateItemCount);

    return () => window.removeEventListener('resize', updateItemCount);
  }, []);


  return (
    <div className="p-4">
      <div className="skeleton text-center h-10 w-full mb-8"></div>
      <div className="max-w-full flex flex-wrap justify-center gap-4">
        {[...Array(itemCount)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {[...Array(itemCount)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
