export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col w-screen p-4 md:px-64 max-w-5xl">
      <div className="mt-8 mb-4 skeleton h-12 w-full"></div>
      <div className="w-full grid gap-4 mr-auto ml-auto">
          <div className="mb-4 flex flex-col gap-4 justify-center items-center">
            <div className="skeleton h-64 w-full"></div>
            <div className="skeleton h-16 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
          </div>
      </div>
    </div>
  );
}
