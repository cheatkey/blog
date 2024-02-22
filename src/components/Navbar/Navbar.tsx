"use client";
import IconWrapper from "../IconWrapper";
import { ThemeChanger } from "../ThemeChanger";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 backdrop-blur h-14 flex w-full justify-center bg-gray-950 bg-opacity-50">
      <div className="w-full max-w-[1200px] flex flex-row items-center justify-between px-8">
        <p className="font-extrabold">개발 블로그 {"</>"}</p>

        <div className="flex flex-row gap-4 items-center">
          <IconWrapper>
            <RiSearchLine size={18} />
          </IconWrapper>
          <p>posts</p>
          <p>series</p>
          <p>tags</p>

          <p>about</p>

          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
