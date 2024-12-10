import Image from "next/image";

type Props = {
  rate: number;
};

function Rate({ rate }: Props) {
  const numberic = Math.floor(rate);
  const decimal = rate % 1;
  return (
    <div className="flex gap-3">
      <div className="flex gap-1">
        {Array.from({ length: numberic }, (_, index) => (
          <Image
            key={index}
            width={15}
            height={14}
            src="/star.svg"
            alt="star"
          />
        ))}
        {decimal !== 0 && (
          <Image
            key="dec"
            width={8}
            height={14}
            src="/half-star.svg"
            alt="star"
          />
        )}
      </div>
      <span className="text-xs text-neutral-600">
        <span className="text-neutral">{rate}/</span>5
      </span>
    </div>
  );
}

export default Rate;
