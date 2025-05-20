"use client";
import { useState } from "react";
import DownIcon from "./down-icon";
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '@/app/utils';
import { CategoryType } from '@/app/models';

function ShopDrop() {
  const [showList, setShowList] = useState(false);
  const { data: categories } = useSWR<CategoryType[]>(`/api/category/list`, fetcher);
  return (
    <div className="flex flex-col gap-2 relative">
      <div role="button" className="flex-ic gap-1 " onClick={() => setShowList((c) => !c)}>
        <span>Shop</span>
        <DownIcon className={`${showList ? 'rotate-180' : ''} duration-100`} />
      </div>
      <ul
        className={`w-48 flex flex-col gap-2 ps-2 transition-all duration-500 overflow-hidden  ${
          showList ? 'max-h-48 h-full lg:h-auto lg:p-4   ' : 'max-h-0 h-0 -mt-2 p-0 !border-0 !rounded-none'
        } lg:absolute left-0 top-full lg:mt-2 lg:border  lg:shadow-sm lg:rounded-xl z-10 bg-base `}
      >
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            onClick={() => setShowList(false)}
            className="text-sm"
          >
            {category.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ShopDrop;
