"use client";

import LogoSVG from "@/components/svg/Logo.SVG";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NabvarMenu = () => {
  const [openMobileNavbarDrawer, setOpenMobileNavbarDrawer] = useState(false);

  return (
    <>
      <nav className="flex-wrap lg:flex items-center py-14 xl:relative z-10 bg-white border-primary w-full">
        <div className="max-w-screen-xl mx-auto container flex">
          <div className="flex items-center justify-between mb-10 lg:mb-0">
            {/* <Image
              src="/image/navbar-logo.png"
              alt="Logo img"
              width={282}
              height={57}
              className="w-52 md:w-80 lg:w-full"
            /> */}
            <Link
              href="/brick"
              className="hidden md:flex items-center space-x-3 rtl:space-x-reverse"
            >
              <LogoSVG width={140} height={48} />
            </Link>
            <button className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center text-green-700 border border-green-700 rounded-md">
              <i data-feather="menu"></i>
            </button>
          </div>

          <ul className="lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-16">
            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Landing</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Products</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Contact</a>
            </li>

            <li className="font-semibold text-gray-900 text-lg hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">About</a>
            </li>
          </ul>

          <button className="px-5 py-3 lg:block border-2 border-green-700 rounded-lg font-semibold text-green-700 text-lg hover:bg-green-700 hover:text-white transition ease-linear duration-500">
            Request quote
          </button>
        </div>
      </nav>
    </>
  );
};

export default NabvarMenu;
