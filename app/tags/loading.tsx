export default function LoadingSkeleton() {
  return (
    <div className="w-screen p-8 lg:p-64">
      <div className="mx-auto skeleton text-center h-10 w-1/3 mb-8 "></div>
      <div className="skeleton text-center h-8 w-full mb-8"></div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton h-12 w-full lg:w-24"></div>
        ))}
      </div>
    </div>
  );
}
