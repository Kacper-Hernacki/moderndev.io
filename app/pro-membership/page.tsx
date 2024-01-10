import Link from "next/link";

export default function ProMembership() {

  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-5xl font-bold gradient-span text-center">
        What is a Pro Membership?
      </h1>

      <div className="max-w-xl">
        Pro membership allows an access to special, pro content. This content is too good to be free, and took hours of
        research, learning and showing in a convienient way. Each pro content has a pro tag on the card of course or
        snippet.
      </div>
      <div className="mt-4 max-w-xl">
      Do you have questions? Contact us <Link className="gradient-span" href="/contact">here</Link>
      </div>
    </div>
  );
};





