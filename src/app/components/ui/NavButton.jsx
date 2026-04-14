"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavButton = ({ nav }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <li>
      <Link
        className={`group relative btn-sm text-base m-0 text-gray-500 font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300
      active:scale-95 active:bg-[#244d3f] active:text-white 
    ${pathName === nav.path ? "bg-[#244d3f] text-white" : "hover:text-[#244d3f]"}`}
        href={nav.path}
      >
        {nav.icon}
        {nav.name}

        <span
          className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#244d3f] transition-transform duration-300 origin-left
    ${pathName === nav.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
        ></span>
      </Link>
    </li>
  );
};

export default NavButton;
