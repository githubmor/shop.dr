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
    <div className="relative w-full pt-6 lg:pt-8">
      {/* Blur effect on edges */}
      <div className="absolute left-0 top-0 h-full w-2 lg:w-20 backdrop-blur-[2px] pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-2 lg:w-20 backdrop-blur-[2px] pointer-events-none z-10"></div>

      <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide px-2 lg:px-24"
      >
        {feeds.map((it: FeedbackType) => (
          <div
            className="flex-shrink-0 w-full lg:w-1/3 px-[0.625rem]  snap-center"
            key={it.id}
          >
            <Item feedback={it} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
