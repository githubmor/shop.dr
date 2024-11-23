import Hamburger from "./hamburger";

function Title({ onToggle }: { onToggle: () => void }) {
  return (
    <div className="flex-ic gap-4 row-start-1 col-start-1 ">
      <Hamburger onClick={onToggle} />
      <span className="text-2xl text-neutral font-anton">SHOP.DR</span>
    </div>
  );
}

export default Title;
