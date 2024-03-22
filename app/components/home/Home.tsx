import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <div className="w-full px-24" style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 5.5%, rgba(72, 32, 25, 0.09) 24.9%, rgba(72, 32, 25, 0.08) 47.06%, rgba(72, 32, 25, 0.07) 69.21%, rgba(255, 255, 255, 0.1) 100%)` }}>
            <div className="max-w-screen-2xl flex justify-between gap-16 mx-auto relative">
                <div className="w-1/2 mt-60">
                    <h6 className="text-3xl text-secondary">Welcome to Onyx:</h6>
                    <h6 className="text-[55px] font-bold text-secondary">Your Source for</h6>
                    <div className="w-fit">
                        <h6 className="text-[55px] font-bold text-secondary">Premium Kaolinite</h6>
                        <div className="w-full flex justify-end">
                            <Image src="/Vector 1.svg" width={255} height={9} priority alt="home" />
                        </div>
                    </div>
                    <div className="w-full h-8">
                    </div>
                    <p className="text-lg text-black">
                        At Onyx, we pride ourselves on delivering the finest quality kaolinite minerals to meet your manufacturing needs. With our dedication to excellence and commitment to customer satisfaction, we stand as your trusted partner in the industry. Explore our range of micronized kaolinite products, meticulously processed to suit diverse applications across various sectors.
                    </p>
                    <div className="mt-6 md:mt-16">
                        <Link href={""} className="bg-tertiary text-white py-3 px-14 text-sm">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <Image src="/home.svg" width={644} height={962} priority alt="home" />
                </div>
                <div className="absolute h-36 flex flex-col gap-4 p-6 bg-quaternary mx-auto bottom-8 left-0 right-0 w-96">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-base">Standard Micronized Kaolinite</span>
                        <Link href="" className="flex justify-center items-center bg-tertiary h-8 w-8">
                            <Image src="/arrow.svg" width={14} height={14} priority alt="home" />
                        </Link>
                    </div>
                    <span className="text-base font-normal">
                        Ideal for a wide array of industrial applications, our standard...
                    </span>
                </div>
                <div className="absolute h-36 flex flex-col gap-4 p-6 bg-quaternary mx-auto top-32 -right-12 w-96">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-base">Standard Micronized Kaolinite</span>
                        <Link href="" className="flex justify-center items-center bg-tertiary h-8 w-8">
                            <Image src="/arrow.svg" width={14} height={14} priority alt="home" />
                        </Link>
                    </div>
                    <span className="text-base font-normal">
                        Tailored to meet the unique demands of specialized...
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;