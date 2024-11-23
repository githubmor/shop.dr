import Basket from "./basket";
import Profile from "./profile";
import Search from "./search";
import ThemeSwitch from "./theme-switch";

function Menus() {
  return (
    <div className="row-start-1 col-start-2 flex gap-3 justify-end items-center flex-auto ">
      <Search />
      <Basket />
      <Profile />
      <ThemeSwitch />
    </div>
  );
}

export default Menus;
