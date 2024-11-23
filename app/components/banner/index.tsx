import Link from "next/link";

function Banner() {
  return (
    <div className="w-full flex gap-1 justify-center items-center bg-neutral text-base py-2">
      <span className="text-xs">
        Sign up and get 20% off to your first order.
      </span>
      <Link href="#" className="contents">
        <span className="font-medium text-xs underline">Sign Up Now</span>
      </Link>
    </div>
  );
}

export default Banner;
