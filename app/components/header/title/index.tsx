import Link from 'next/link';
import Hamburger from './hamburger';

function Title({ onToggle }: { onToggle: () => void }) {
  return (
    <div className="flex-ic gap-4 row-start-1 col-start-1 ">
      <Hamburger onClick={onToggle} />
      <Link href="/" className="text-2xl lg:text-[2rem] text-neutral font-anton">
        SHOP.DR
      </Link>
    </div>
  );
}

export default Title;
