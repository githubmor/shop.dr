"use client";
import { useState } from "react";
import DownIcon from "./down-icon";

function ShopDrop() {
  const [showList, setShowList] = useState(false);
  return (
    <div className="flex flex-col gap-2 relative">
      <div
        role="button"
        className="flex-ic gap-1 "
        onClick={() => setShowList((c) => !c)}
      >
        <span>Shop</span>
        <DownIcon className={`${showList ? "rotate-180" : ""} duration-100`} />
      </div>
      <div
        className={`w-48 flex flex-col gap-2 ps-2 transition-all duration-500 overflow-hidden  ${
          showList
            ? "max-h-48 h-full lg:h-auto lg:p-4   "
            : "max-h-0 h-0 -mt-2 p-0 !border-0 !rounded-none"
        } lg:absolute left-0 top-full lg:mt-2 lg:border lg:border-neutral-600 lg:shadow-sm lg:rounded-xl -z-10 `}
      >
        <span className="text-sm">Men</span>
        <span className="text-sm">Women</span>
        <span className="text-sm">Causal</span>
      </div>
    </div>
  );
}

export default ShopDrop;
