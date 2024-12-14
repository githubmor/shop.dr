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
    <nav className="w-full text-neutral">
      <div
        className="w-full px-4 lg:px-24 py-6 grid grid-cols-2 auto-rows-auto justify-self-center 
        lg:flex lg:justify-between lg:items-center lg:gap-10 "
      >
        <Title onToggle={onToggleNav} />
        <Navs show={showNav} />
        <Menus />
      </div>
    </nav>
  );
}

export default Header;
