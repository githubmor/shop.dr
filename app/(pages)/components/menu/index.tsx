import Item from './Item';

type ItemType = {
  id: number;
  title: string;
};

type Props = {
  items: ItemType[];
  title: string;
};

function Menu({ items, title }: Props) {
  return (
    <ul className="flex flex-col gap-5">
      <div className="flex items-center w-full justify-between">
        <strong className="font-bold text-lg">{title}</strong>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Item key={item.id} label={item.title} />
        ))}
      </div>
    </ul>
  );
}

export default Menu;
