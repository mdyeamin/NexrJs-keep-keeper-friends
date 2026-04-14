import Link from "next/link";
import { FaChartLine } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import NavButton from "../ui/NavButton";

const NavBar = () => {
  const navItems = [
    { path: "/", name: "Home", icon: <IoHomeOutline /> },
    { path: "/timeline", name: "TimeLine", icon: <IoMdTime /> },
    { path: "/states", name: "States", icon: <FaChartLine /> },
  ];
  return (
    <div class="navbar bg-base-100 shadow-sm justify-between">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabindex="-1"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
             {navItems.map((nav,i)=> <NavButton key={i} nav={nav}/>
          )}
          </ul>
        </div>
        <Link href="/" className=" text-2xl font-semibold">
         {" "}
         <span className="font-bold">Keep</span>
          <span className="text-[#244d3f]">Keeper</span>
       </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          {navItems.map((nav,i)=> <NavButton key={i} nav={nav}/>
          )}
        </ul>
      </div>
      
    </div>
    // <div className="navbar bg-base-100 items-center shadow-sm justify-center">
    //   <div className="flex-1">
    //     <Link href="/" className=" text-2xl font-semibold">
    //       {" "}
    //       <span className="font-bold">Keep</span>
    //       <span className="text-[#244d3f]">Keeper</span>
    //     </Link>
    //   </div>
    //   <div className="">
    //     <ul className="menu menu-horizontal space-x-5">
    //       {navItems.map((nav,i)=> <NavButton key={i} nav={nav}/>
    //       )}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default NavBar;
