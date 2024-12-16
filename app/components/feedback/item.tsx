import Image from "next/image";
import { FeedbackType } from ".";
import Rate from "../product/rate";

type Props = {
  feedback: FeedbackType;
};

function Item({ feedback }: Props) {
  return (
    <div className="flex flex-col gap-3 p-6 lg:px-8 lg:py-7 rounded-[1.25rem] border border-neutral-100">
      <Rate rate={feedback.rate} showRateNumber={false} />
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 items-center">
          <span className="font-bold lg:text-[1.25rem]">{feedback.writer}</span>
          <Image src="ok.svg" width={19} height={20} alt="ok" />
        </div>
        <span className="text-sm lg:text-base !text-neutral-600">
          {feedback.exp}
        </span>
      </div>
    </div>
  );
}

export default Item;
