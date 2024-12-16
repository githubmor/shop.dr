"use client";
import { fetchFeedbacks } from "@/app/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import List from "./list";
export type ScrollProp = "next" | "prev";

export type FeedbackType = {
  id: number;
  rate: number;
  writer: string;
  exp: string;
};

function Feedback() {
  const [feeds, setFeeds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetchFeedbacks().then((res) => {
      setFeeds(res);
    });
  }, []);

  const onHandleClick = (scrollDirection: "next" | "prev") => {
    const totalItems = feeds.length;

    // Calculate the new index for cyclic behavior
    const newIndex =
      scrollDirection === "next"
        ? (currentIndex + 1) % totalItems // Move to the next item, wrap to 0 if at the last item
        : (currentIndex - 1 + totalItems) % totalItems; // Move to the previous item, wrap to the last item if at 0
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="w-full pt-16 px-4 lg:px-24 flex flex-col gap-6 lg:gap-8 ">
        <div className="flex flex-wrap justify-between items-end">
          <span className="font-anton text-[2rem] lg:text-5xl flex-auto leading-none">
            OUR HAPPY CUSTOMERS
          </span>
          <div className="flex gap-4 justify-end items-center flex-auto text-right">
            <Image
              role="button"
              onClick={() => onHandleClick("prev")}
              width={24}
              height={24}
              src="/arrow.svg"
              alt="arrow"
            />
            <Image
              role="button"
              onClick={() => onHandleClick("next")}
              className="rotate-180"
              width={24}
              height={24}
              src="/arrow.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <List feeds={feeds} currentIndex={currentIndex} />
    </>
  );
}

export default Feedback;
