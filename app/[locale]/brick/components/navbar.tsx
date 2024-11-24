"use client"

import Link from "next/link";
import { useState } from "react";
import TelegramSVG from "@/components/svg/Telegram.SVG";
import WhatsappSVG from "@/components/svg/Whatsapp.SVG";
import LogoSVG from "@/components/svg/Logo.SVG";
// import { SwitchLocal } from "../../(home)/switch";
import MobileNavbarBrick from "./MobileNavbarBrick";

const NavbarMenu = () => {

    const [openMobileNavbarDrawer, setOpenMobileNavbarDrawer] = useState(false);

    // const t = useScopedI18n('navbar');

    return (
        <>
            <nav className="p-6 h-24 border-gray-20 border-b border-primary fixed w-full top-0 bg-quaternary md:px-12 lg:px-24 z-10">
                <div className="max-w-screen-2xl h-full flex flex-wrap items-center justify-between mx-auto my-auto">
                    <div className="hidden md:flex gap-36">
                        <Link href="/" className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
                            <LogoSVG width={140} height={48} />
                        </Link>
                        <div className="hidden w-full my-auto md:block md:w-auto text-secondary text-base font-normal">
                            <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                                <li>
                                    <Link href="#home" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:p-0">Landing</Link>
                                </li>
                                <li>
                                    <Link href="#services" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:p-0">Products</Link>
                                </li>
                                <li>
                                    <Link href="#about" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:p-0">Contact</Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:p-0">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => setOpenMobileNavbarDrawer(true)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center bg-tertiary md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white" />
                        </svg>
                    </button>
                    <div className="hidden gap-6 lg:flex">
                        <div className="flex gap-4">
                            <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://t.me/onyx_bam" target="_blank" rel="noopener noreferrer">
                                <TelegramSVG width={24} height={24} />
                            </Link>
                            <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://wa.me/989143506580" target="_blank" rel="noopener noreferrer">
                                <WhatsappSVG width={24} height={24} />
                            </Link>
                            {/* <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <InstagramSVG width={24} height={24} />
                            </Link> */}
                        </div>
                        {/* <SwitchLocal /> */}
                    </div>
                </div>
            </nav>
            <MobileNavbarBrick openDrawer={openMobileNavbarDrawer} onClose={() => setOpenMobileNavbarDrawer(false)} />
        </>
    );
}

export default NavbarMenu;