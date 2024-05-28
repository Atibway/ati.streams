import Image from "next/image";
import Link from "next/link";
import React from "react";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import { ModeToggle } from "./ThemeToggler";
import logo1 from "@/public/logo1.png";
import logo2 from "@/public/logo2.png";

const Header = () => {
  return (
    <div className="w-full flex pl-4 pr-4 items-center justify-between  bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0 pt-0">
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={logo2}
          priority={true}
          alt="logo"
          className="w-40 cursor-pointer h-auto  "
        />
      </Link>
      {/* others */}

      <div className="text-white flex space-x-2 items-center ">
        {/* Genre */}
        <GenreDropDown />
        {/* Search */}
        <SearchInput />
        {/* Theme */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
