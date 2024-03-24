import Image from "next/image";

const WhyChoose = () => {
    return (
        <div id="about" className="w-full px-6 md:px-24 py-32">
            <div className="max-w-screen-2xl flex flex-col-reverse items-center justify-start lg:flex-row lg:justify-between lg:items-center gap-12 xl:gap-32 mx-auto">
                <div className="w-full flex flex-col gap-4 lg:w-2/3">
                    <div className="basis-full border border-primary flex flex-col gap-4 p-4 md:p-5 md:gap-5 lg:p-6 lg:gap-6">
                        <div className="flex justify-start items-center ">
                            <Image src="/Best Seller.svg" width={64} height={64} priority alt="Best Seller" />
                            <h2 className="text-[17px] leading-6 font-medium text-tertiary lg:text-xl xl:text-[22px] xl:leading-7">Unmatched Quality Assurance</h2>
                        </div>
                        <p className="text-sm leading-6 text-black font-normal xl:text-base">
                            Our stringent quality control measures ensure that each batch of kaolinite meets the highest standards of purity and performance. With Onyx, you can trust in the reliability and consistency of our products, every time.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="basis-full lg:basis-1/2 border border-primary flex flex-col gap-4 p-4 md:p-5 md:gap-5 lg:p-6 lg:gap-6">
                            <div className="flex justify-start items-center ">
                                <Image src="/Setting.svg" width={74} height={74} priority alt="Setting" />
                                <h2 className="text-[17px] leading-6 font-medium text-tertiary lg:text-xl xl:text-[22px] xl:leading-7">Technical Expertise</h2>
                            </div>
                            <p className="text-sm leading-6 text-black font-normal xl:text-base">
                                Backed by a team of seasoned experts, we possess the technical know-how to address your specific requirements and provide tailored solutions. From product selection to technical support, we are here to help you optimize your processes for success.
                            </p>
                        </div>
                        <div className="basis-full lg:basis-1/2 border border-primary flex flex-col gap-4 p-4 md:p-5 md:gap-5 lg:p-6 lg:gap-6">
                            <div className="flex justify-start items-center ">
                                <Image src="/Middle East.svg" width={64} height={64} priority alt="Middle East" />
                                <h2 className="text-[17px] leading-6 font-medium text-tertiary lg:text-xl xl:text-[22px] xl:leading-7">Global Reach</h2>
                            </div>
                            <p className="text-sm leading-6 text-black font-normal xl:text-base">
                                With a worldwide network of distribution partners, we cater to clients across the globe, offering seamless access to our premium kaolinite products. No matter where you are located, Onyx is your reliable source for top-quality minerals.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <h6 className="text-2xl font-bold text-secondary md:text-[35px] md:leading-[45px] lg:text-[40px] lg:leading-[50px] xl:text-[45px] xl:leading-[72px]">Why Choose</h6>
                    <h6 className="text-[40px] leading-[56px] font-bold text-secondary md:text-[35px] md:leading-[45px] lg:text-[45px] lg:leading-[50px] xl:text-[57px xl:leading-[80px]">Onyx</h6>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;