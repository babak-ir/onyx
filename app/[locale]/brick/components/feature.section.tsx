import Image from "next/image";
import { FunctionComponent } from "react";

interface FeatureSectionProps {}

const Featuresection: FunctionComponent<FeatureSectionProps> = () => {
  return (
    <section className="bg-white py-10 md:py-16 xl:relative">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-end gap-8">
          <div className="left-0 bottom-0 w-full flex justify-center items-center">
            {/* <Shimmer src="/image/feature-img.png" alt="Feature img" /> */}
            <Image
              src="/image/bricks.webp"
              alt="Logo img"
              width={650}
              height={798}
              className=""
            />
          </div>

          <div className="">
            <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
              Which type of refractory brick are you considering: fireclay, high
              alumina, silica, magnesia, or insulating bricks?
            </h1>

            <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
              We offer a wide selection of refractory brick types, allowing you
              to choose the best option for your specific high-temperature
              needs.
            </p>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <i data-feather="check-circle" className=" text-green-900"></i>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  Best Refractory Quality Guarantee
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  We guarantee the quality of the refractory bricks you purchase
                  from us.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <i data-feather="lock" className=" text-green-900"></i>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  Secure Purchase Guarantee
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  Your transactions will always remain confidential, and you
                  will receive a discount.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <i data-feather="credit-card" className=" text-green-900"></i>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  Low-Cost Refractory Brick Prices
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  By purchasing refractory bricks from us, you will receive a
                  discount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuresection;
