"use client";
import { useAnimNumber } from "./hooks";

type Props = {
  num: number;
  caption: string;
  className?: string;
};

function AnimatNumber({ num, caption, className = "" }: Props) {
  const number = useAnimNumber(num);
  // Format number with thousand separator
  const formattedNumber = new Intl.NumberFormat("en-US").format(number);
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-bold text-2xl lg:text-[2.5rem] ">{formattedNumber}+</span>
      <span className="text-xs !text-neutral-600  lg:text-base">{caption}</span>
    </div>
  );
}

export default AnimatNumber;
