import Link from "next/link";
import { getScopedI18n } from "../../locales/server";
import { SwitchLocal } from "../../app/[locale]/(home)/switch";
import AddressSVG from "../svg/Address.SVG";
import CellPhoneSVG from "../svg/CellPhone.SVG";
// import FaxSVG from "../svg/Fax.SVG";
import LogoSVG from "../svg/Logo.SVG";
import PhoneSVG from "../svg/Phone.SVG";
import TelegramSVG from "../svg/Telegram.SVG";
import WhatsappSVG from "../svg/Whatsapp.SVG";

const Footer = async () => {

    const t = await getScopedI18n('footer');

    return (
        <div id="contact" className="w-full p-6 md:px-24 md:py-32" style={{ backgroundImage: "linear-gradient(0deg, rgba(72, 32, 25, 0.1) 0%, rgba(72, 32, 25, 0.09) 24.9%, rgba(72, 32, 25, 0.08) 47.06%, rgba(72, 32, 25, 0.07) 69.21%, rgba(255, 255, 255, 0.1) 100%)" }}>
            <div className="max-w-screen-2xl flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-start gap-12 xl:gap-32 mx-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/3">
                    <Link href="/" className="flex items-center gap-3 rtl:space-x-reverse">
                        <LogoSVG width={215} height={74} />
                    </Link>
                    <p className="text-secondary font-normal text-sm leading-6 lg:text-base">
                        {t('description')}
                    </p>
                    <SwitchLocal />
                </div>
                <div className="flex flex-col gap-8">
                    <h3 className="font-medium text-[17px] leading-6 text-secondary lg:text-[22px] lg:leading-7">{t('contacts')}</h3>
                    <div className="flex flex-col justify-start items-start font-normal text-sm leading-6 text-black gap-6 lg:text-base lg:flex-row lg:gap-24">
                        <div className="flex flex-col gap-6">
                            {/* <div className="flex items-center gap-4">
                                <CellPhoneSVG width={14} height={14} />
                                <span dir="ltr">+989125616174</span>
                            </div> */}
                            <div className="flex items-center gap-4">
                                <PhoneSVG width={16} height={16} />
                                <span dir="ltr">+989125616174</span>
                            </div>
                        </div>
                        <div className="flex justify-start items-start gap-4">
                            <AddressSVG width={20} height={20} />
                            <div className="flex flex-col gap-6">
                                <p className="max-w-80">
                                    {t('address')}
                                </p>
                                <div className="flex gap-4">
                                    <Link className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0" href="https://t.me/onyx_bam" target="_blank" rel="noopener noreferrer">
                                        <TelegramSVG width={24} height={24} />
                                    </Link>
                                    <Link className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0" href="https://wa.me/989125616174" target="_blank" rel="noopener noreferrer">
                                        <WhatsappSVG width={24} height={24} />
                                    </Link>
                                    {/* <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <InstagramSVG width={24} height={24} />
                                    </Link> */}
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