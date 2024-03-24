import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div id="contact" className="w-full p-6 md:px-24 md:py-32" style={{ backgroundImage: "linear-gradient(0deg, rgba(72, 32, 25, 0.1) 0%, rgba(72, 32, 25, 0.09) 24.9%, rgba(72, 32, 25, 0.08) 47.06%, rgba(72, 32, 25, 0.07) 69.21%, rgba(255, 255, 255, 0.1) 100%)" }}>
            <div className="max-w-screen-2xl flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-start gap-12 xl:gap-32 mx-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/onyx.svg" width={215} height={74} priority alt="ONYX Logo" />
                    </Link>
                    <p className="text-secondary font-normal text-sm leading-6 lg:text-base">
                        Ready to experience the Onyx difference? Contact us today to learn more about our products and how we can support your business. Let us be your preferred supplier of choice for premium micronized kaolinite, and together, let&apos;s elevate your manufacturing processes to new heights of excellence.
                    </p>
                </div>
                <div className="flex flex-col gap-8">
                    <h3 className="font-medium text-[17px] leading-6 text-secondary lg:text-[22px] lg:leading-7">Contacts</h3>
                    <div className="flex flex-col justify-start items-start font-normal text-sm leading-6 text-black gap-6 lg:text-base lg:flex-row lg:gap-24">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <Image src="/cellPhone.svg" width={16} height={16} sizes="24px" priority alt="ONYX cellPhone" />
                                <span>+989143586995</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image src="/phone.svg" width={16} height={16} sizes="24px" priority alt="ONYX phone" />
                                <span>+9804533751147</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image src="/fax.svg" width={16} height={16} sizes="24px" priority alt="ONYX fax" />
                                <span>+9804533751147</span>
                            </div>
                        </div>
                        <div className="flex justify-start items-start gap-4">
                            <Image src="/address.svg" width={20} height={20} sizes="24px" priority alt="ONYX address" />
                            <div className="flex flex-col gap-6">
                                <p className="max-w-80">
                                    Ardabil, administrative town in front of Enix company&apos;s construction engineering system organization
                                </p>
                                <div className="flex gap-6">
                                    <Link className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0" href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                                        <Image src="/telegram.svg" alt="Telegram Logo" width={20} height={20} sizes="24px" priority />
                                    </Link>
                                    <Link className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0" href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                        <Image src="/whatsapp.svg" alt="Whatsapp Logo" width={20} height={20} sizes="24px" priority />
                                    </Link>
                                    <Link className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <Image src="/instagram.svg" alt="Instagram Logo" width={20} height={20} sizes="24px" priority />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;