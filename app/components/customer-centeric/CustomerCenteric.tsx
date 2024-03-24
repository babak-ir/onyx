import Image from "next/image";
import Link from "next/link";

const CustomerCenteric = () => {
    return (
        <div className="w-full px-6 md:px-24 pt-32">
            <div className="max-w-screen-2xl flex flex-col-reverse items-center lg:flex-row lg:justify-between gap-12 xl:gap-32 mx-auto">
                <div className="w-full lg:w-1/2">
                    <Image src="/Group1.svg" width={644} height={627} priority alt="customer centric1" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h6 className="text-2xl leading-8 font-bold text-tertiary md:text-[35px] md:leading-[45px] lg:text-[30px] lg:leading-[35px] xl:text-[45px] xl:leading-[72px]">Customer-Centric</h6>
                    <h6 className="text-2xl leading-8 font-bold text-tertiary md:text-[35px] md:leading-[45px] lg:text-[30px] lg:leading-[35px] xl:text-[45px] xl:leading-[72px]">Approach</h6>
                    <p className="text-base text-black mt-8">
                        At Onyx, our customers are at the heart of everything we do. We are committed to building long-lasting partnerships based on trust, integrity, and mutual success. Whether you are a small-scale manufacturer or a multinational corporation, we prioritize your needs and strive to exceed your expectations at every turn.
                    </p>
                    <div className=" mt-6 md:mt-16">
                        <Link href="#about" className="bg-tertiary text-white py-3 px-14 text-sm">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerCenteric;