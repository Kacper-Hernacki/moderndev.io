export default function LoadingSkeleton() {
  return (
    <div className="p-4">
      <div className="skeleton text-center h-10 w-full mb-8"></div> {/* Title Skeleton */}
      <div className="flex justify-center gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 w-52">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        {[...Array(4)].map((_, i) => (
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
