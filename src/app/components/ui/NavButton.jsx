"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavButton = ({nav}) => {
    const pathName = usePathname()
    console.log(pathName);
    

    return (
        <li >
            
            <Link className={ `text-base ${pathName === nav.path ? "bg-[#244d3f] text-white":"" }`} href={nav.path}>{nav.icon}{nav.name}</Link>
          </li>
    );
};

export default NavButton;