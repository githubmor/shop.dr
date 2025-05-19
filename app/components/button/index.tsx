import Link from "next/link";

type Props = {
  text: string;
  className?: string;
};
function Button({ text, className = "" }: Props) {
  return (
    <Link
      href="/shop"
      className={`${
        className || 'w-full lg:w-1/3 bg-neutral text-base'
      }  rounded-full flex-center whitespace-nowrap px-14 py-4 `}
    >
      {text}
    </Link>
  );
}

export default Button;
