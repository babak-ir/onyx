import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="h-24 border-gray-20 border-b border-primary fixed w-full top-0 bg-white px-24 z-10">
            <div className="max-w-screen-2xl h-full flex flex-wrap items-center justify-between mx-auto my-auto">
                <div className="flex gap-36">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/onyx.svg" width={140} height={48} priority alt="ONYX Logo" />
                    </Link>
                    <div className="hidden w-full my-auto md:block md:w-auto text-secondary text-base font-normal">
                        <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                            <li>
                                <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden gap-6 md:flex">
                    <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                        <Image src="/telegram.svg" alt="Telegram Logo" className="dark:invert" width={24} height={24} priority />
                    </Link>
                    <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/whatsapp.svg" alt="Whatsapp Logo" className="dark:invert" width={24} height={24} priority />
                    </Link>
                    <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Instagram Logo" className="dark:invert" width={24} height={24} priority />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;