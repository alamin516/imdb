import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-slate-800">
      <div className="flex justify-between items-center py-3 max-w-7xl sm:m-auto px-2 ">
        <div className="flex gap-5 items-center lg:flex-row-reverse">
          <Link href="#" className="text-white flex items-center">
            <GiHamburgerMenu className="mr-2"></GiHamburgerMenu>
            <span>MENU</span>
          </Link>
          <Link href="/" className="text-2xl">
            <span className="text-xl font-blod bg-amber-400 rounded-lg font-bold mr-1 py-1 px-2">
              IMDb
            </span>
            <span className="hidden sm:inline text-white">Clone</span>
          </Link>
        </div>
        <div className="flex gap-5 text-white">
          <MenuItems title="HOME" address="/" Icon={AiFillHome}></MenuItems>
          <MenuItems
            title="ABOUT"
            address="/about"
            Icon={BsInfoCircleFill}
          ></MenuItems>
        </div>
      </div>
    </div>
  );
};

export default Header;
