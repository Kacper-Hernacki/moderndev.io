export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col w-screen p-4 md:px-64">
      <div className="mt-8 mb-4 skeleton h-12 w-full"></div>
      <div className="mb-4 gap-2 flex justify-center">
        <div className="skeleton h-24 w-full"></div>
        <div className="skeleton h-24 w-full"></div>
        <div className="skeleton h-24 w-full"></div>
      </div>
      <div className="w-full grid gap-4 mr-auto ml-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="mb-4 flex flex-col gap-4 justify-center items-center">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-28 ml-auto"></div>
          </div>
        ))}
      </div>
    </div>

  );
}
