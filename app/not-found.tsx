import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-600 hover:text-blue-800 transition duration-300">
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;

