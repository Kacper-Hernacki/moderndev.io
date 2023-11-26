export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="flex flex-wrap gap-4 w-52">
          <div className="flex gap-4 w-screen">
            <div className="skeleton h-32"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
