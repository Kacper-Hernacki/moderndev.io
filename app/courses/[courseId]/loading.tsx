export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col w-max">
      <div className="mb-4 skeleton h-12 w-full"></div>
      <div className="mb-4 gap-2 flex justify-center">
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>
      <div className="w-max grid gap-4 mr-auto ml-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">

        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 justify-center items-center">
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
