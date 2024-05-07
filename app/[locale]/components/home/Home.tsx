import Link from "next/link";
import { getScopedI18n } from "../../../../locales/server";
import ArrowSVG from "../../../../components/svg/Arrow.SVG";
import Shimmer from "../../../../components/img/Shimmer";

const Home = async () => {

    const t = await getScopedI18n('home');

    return (
        <div id="home" className="w-full p-6 md:px-24" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 5.5%, rgba(72, 32, 25, 0.09) 24.9%, rgba(72, 32, 25, 0.08) 47.06%, rgba(72, 32, 25, 0.07) 69.21%, rgba(255, 255, 255, 0.1) 100%)` }}>
            <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between gap-16 mx-auto">
                <div className="w-full mt-20 xl:w-1/2 xl:mt-60">
                    <h6 className="text-xl md:text-3xl text-secondary">{t('welcome')}</h6>
                    <h6 className="text-[32px] leading-[48px] font-bold text-secondary md:text-[55px] md:leading-[76px]">{t('source')}</h6>
                    <div className="w-fit flex flex-wrap">
                        <h6 className="text-[32px] leading-[48px] font-bold text-secondary md:text-[55px] md:leading-[76px]">{t('premium')}&nbsp;</h6>
                        <div className="w-fit flex flex-col">
                            <h6 className="text-[32px] leading-[48px] w-fit font-bold text-tertiary md:text-[55px] md:leading-[76px]">{t('kaolinite')}</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="261" height="15" viewBox="0 0 261 15" fill="none" className="w-[147px] md:w-[252px]">
                                <path d="M258 12C205.469 4.56608 175.404 2.58761 122.265 3.06776C75.539 3.48996 49.191 5.46327 3 12" stroke="#482019" stroke-width="6" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-lg text-black mt-5 xl:mt-6">
                        {t('description')}
                    </p>
                    <div className="mt-6 md:mt-16">
                        <Link href="#contact" className="bg-tertiary text-white py-3 px-14 text-sm">{t('contact')}</Link>
                    </div>
                </div>
                <div className="w-full inline-flex items-center justify-center relative xl:w-1/2">
                    <Shimmer src="/home.webp" width={644} height={962} alt="home" />
                    <div className="w-fit sm:w-80 absolute h-fit flex flex-col gap-2 md:gap-4 p-4 md:p-6 bg-quaternary mx-auto top-4 -right-2 lg:top-32 md:-right-12 md:w-96">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold md:text-base">{t("linkTo.stmk.title")}</span>
                            <Link href="#services" className="flex justify-center items-center bg-tertiary h-8 w-8">
                                <ArrowSVG width={14} height={14} />
                            </Link>
                        </div>
                        <span className="text-sm md:text-base font-normal">
                            {t("linkTo.stmk.description")}
                        </span>
                    </div>
                    <div className="w-fit sm:w-80 absolute h-fit flex flex-col gap-2 md:gap-4 p-4 md:p-6 bg-quaternary mx-auto bottom-8 left-0 lx:left-0 lx:right-0 md:w-96">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold md:text-base">{t("linkTo.stmk2.title")}</span>
                            <Link href="#services" className="flex justify-center items-center bg-tertiary h-8 w-8">
                                <ArrowSVG width={14} height={14} />
                            </Link>
                        </div>
                        <span className="text-sm md:text-base font-normal">
                            {t("linkTo.stmk2.description")}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;