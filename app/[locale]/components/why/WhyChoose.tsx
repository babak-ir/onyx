import Image from "next/image";
import { getScopedI18n } from "../../../../locales/server";
import BestSellerSVG from "../../../../components/svg/BestSeller.SVG";
import SettingSVG from "../../../../components/svg/Setting.SVG";
import MiddleEastSVG from "../../../../components/svg/MiddleEast.SVG";

const WhyChoose = async () => {

    const t = await getScopedI18n('whyChoose');

    return (
        <div id="about" className="w-full px-6 md:px-24 py-32">
            <div className="max-w-screen-2xl flex flex-col-reverse items-center justify-start lg:flex-row lg:justify-between lg:items-center gap-12 xl:gap-32 mx-auto">
                <div className="w-full flex flex-col gap-4 lg:w-2/3">
                    <div className="basis-full border border-primary flex flex-col gap-4 p-4 md:p-5 md:gap-5 lg:p-6 lg:gap-6">
                        <div className="flex justify-start items-center ">
                            <BestSellerSVG width={64} height={64} />
                            <h2 className="text-[17px] leading-6 font-medium text-tertiary lg:text-xl xl:text-[22px] xl:leading-7">{t('quality.title')}</h2>
                        </div>
                        <p className="text-sm leading-6 text-black font-normal xl:text-base">
                            {t('quality.description')}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="basis-full lg:basis-1/2 border border-primary flex flex-col gap-4 p-4 md:p-5 md:gap-5 lg:p-6 lg:gap-6">
                            <div className="flex justify-start items-center ">
                                <SettingSVG width={74} height={74} />
                                <h2 className="text-[17px] leading-6 font-medium text-tertiary lg:text-xl xl:text-[22px] xl:leading-7">{t('technical.title')}</h2>
                            </div>
                            <p className="text-sm leading-6 text-black font-normal xl:text-base">
                                {t('technical.description')}
                            </p>
                        </div>
                        <div className="basis-full lg:basis-1/2 border border-primary flex flex-col gap-4 p-4 md:p-5 md:gap-5 lg:p-6 lg:gap-6">
                            <div className="flex justify-start items-center ">
                                <MiddleEastSVG width={64} height={64} />
                                <h2 className="text-[17px] leading-6 font-medium text-tertiary lg:text-xl xl:text-[22px] xl:leading-7">{t('global.title')}</h2>
                            </div>
                            <p className="text-sm leading-6 text-black font-normal xl:text-base">
                                {t('global.description')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <h6 className="text-2xl font-bold text-secondary md:text-[35px] md:leading-[45px] lg:text-[40px] lg:leading-[50px] xl:text-[45px] xl:leading-[72px]">{t('title')}</h6>
                    <h6 className="text-[40px] leading-[56px] font-bold text-secondary md:text-[35px] md:leading-[45px] lg:text-[45px] lg:leading-[50px] xl:text-[57px xl:leading-[80px]">{t('onyx')}</h6>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;