'use client';
import DownIcon from '@/app/components/header/navs/show-drop/down-icon';

type Props = {
  label: string;
  onClick: () => void;
};

function Item({ label, onClick }: Props) {
  return (
    <li onClick={onClick} className="flex justify-between items-center cursor-pointer">
      {label}
      <DownIcon className=" -rotate-90" />
    </li>
  );
}

export default Item;
