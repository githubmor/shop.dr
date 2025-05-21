import DownIcon from '@/app/components/header/navs/show-drop/down-icon';

type Props = {
  label: string;
};

function Item({ label }: Props) {
  return (
    <li className="flex justify-between items-center cursor-pointer">
      {label} <DownIcon className=" -rotate-90" />
    </li>
  );
}

export default Item;
