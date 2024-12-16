"use client";
import { useEffect, useRef } from "react";
import { FeedbackType } from "..";
import Item from "../item";

type Props = {
  currentIndex: number;
  feeds: FeedbackType[];
};

function List({ currentIndex, feeds }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = containerRef.current;
    const children = scrollContainer?.children;

    if (scrollContainer && children && children.length > 0) {
      const targetChild = children[currentIndex] as HTMLElement;
      targetChild?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);
  return (
    <div
      ref={containerRef}
      className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
    >
      {feeds.map((it: FeedbackType) => (
        <div
          className="flex-shrink-0 w-full lg:w-1/3 px-[0.625rem] first:pr-[0.625rem] first:!pl-0 last:pl-[0.625rem] last:!pr-0 snap-center"
          key={it.id}
        >
          <Item feedback={it} />
        </div>
      ))}
    </div>
  );
}

export default List;
