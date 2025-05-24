'use client';
import { TagType } from '@/app/models';
import Item from './Item';
type Props = {
  items: TagType[];
  title: string;
  onItemClick: (id: number) => void;
};

function Menu({ items, title, onItemClick }: Props) {
  return (
    <ul className="flex flex-col gap-5">
      <div className="flex items-center w-full justify-between">
        <strong className="font-bold text-lg">{title}</strong>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Item key={item.id} label={item.title} onClick={() => onItemClick(item.id)} />
        ))}
      </div>
    </ul>
  );
}

export default Menu;
