"use client";
import { useState } from "react";
import Menus from "./menus";
import Navs from "./navs";
import Title from "./title";

function Header() {
  const [showNav, setshowNav] = useState(false);
  const onToggleNav = () => {
    setshowNav((c) => !c);
  };
  return (
    <nav
      className={`lg:container w-full px-4 py-6 grid grid-cols-2 auto-rows-auto justify-self-center 
        lg:flex  lg:justify-between lg:items-center lg:gap-10 text-neutral `}
    >
      <Title onToggle={onToggleNav} />
      <Navs show={showNav} />
      <Menus />
    </nav>
  );
}

export default Header;
