import { Drawer, DrawerOptions } from "flowbite";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { useScopedI18n } from "../../locales/client";
import { SwitchLocal } from "../../app/[locale]/(home)/switch";
import LogoSVG from "../svg/Logo.SVG";
import TelegramSVG from "../svg/Telegram.SVG";
import WhatsappSVG from "../svg/Whatsapp.SVG";

interface IProp {
    openDrawer: boolean;
    onClose: () => void;
}

const MobileNavbar = ({ openDrawer = false, onClose }: IProp) => {

    const t = useScopedI18n('navbar');

    const navbarRef = useRef(null);
    const drawerOptions: DrawerOptions = useMemo(() => {
        return {
            placement: 'left',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses: 'bg-gray-900 bg-opacity-50 fixed inset-0 z-30',
            onHide: () => {
                onClose();
            },
        }
    }, [onClose]);

    const mobileNavbarDrawer = useMemo<Drawer | null>(() => {
        return openDrawer ? new Drawer(navbarRef.current, drawerOptions) : null;
    }, [drawerOptions, openDrawer]);

    useEffect(() => {

        if (openDrawer === true) (mobileNavbarDrawer as Drawer).show();

    }, [openDrawer, mobileNavbarDrawer]);


    return (
        <div ref={navbarRef} id="drawer-contact" className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full bg-white w-full md:w-[20rem]" tabIndex={-1}>
            <div className="flex justify-between items-start px-6 pt-12">
                <Link href="/" className="md:flex items-center rtl:space-x-reverse">
                    <LogoSVG width={160} height={54} />
                </Link>
                <button className="inline-flex items-center justify-center p-2 cursor-pointer bg-tertiary" onClick={() => (mobileNavbarDrawer as Drawer).hide()} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col gap-4 text-secondary font-normal px-6 pt-8 min-h-fit h-full overflow-y-auto">
                <div className="border-b border-gray-light px-4 py-2">
                    <Link onClick={() => (mobileNavbarDrawer as Drawer).hide()} href="#home" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{t('home')}</Link>
                </div>
                <div className="border-b border-gray-light px-4 py-2">
                    <Link onClick={() => (mobileNavbarDrawer as Drawer).hide()} href="#services" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{t('services')}</Link>
                </div>
                <div className="border-b border-gray-light px-4 py-2">
                    <Link onClick={() => (mobileNavbarDrawer as Drawer).hide()} href="#about" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{t('about')}</Link>
                </div>
                <div className="border-b border-gray-light px-4 py-2">
                    <Link onClick={() => (mobileNavbarDrawer as Drawer).hide()} href="#contact" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">{t('contact')}</Link>
                </div>
                <div className="flex gap-4 px-7 py-4">
                    <div className="flex gap-4">
                        <Link className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0" href="https://t.me/onyx_bam" target="_blank" rel="noopener noreferrer">
                            <TelegramSVG width={24} height={24} />
                        </Link>
                        <Link className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0" href="https://wa.me/989143506580" target="_blank" rel="noopener noreferrer">
                            <WhatsappSVG width={24} height={24} />
                        </Link>
                        {/* <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <InstagramSVG width={24} height={24} />
                            </Link> */}
                    </div>
                    <SwitchLocal />
                </div>
            </div>
        </div>
    );
}

export default MobileNavbar;