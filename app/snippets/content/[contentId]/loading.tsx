export default function LoadingSkeleton() {
  return (
    <div className="w-screen space-y-4 max-w-2xl px-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col gap-4 w-full">
          <div className="skeleton h-12 lg:h-32 w-full"></div>
          <div className="skeleton h-8 lg:h-16 w-full"></div>
          <div className="skeleton h-4 lg:h-8 w-28"></div>
          <div className="skeleton h-4 lg:h-8 w-full"></div>
          <div className="skeleton h-4 lg:h-8 w-full"></div>
        </div>
      ))}
    </div>
  );
}
