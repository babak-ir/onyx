import { getScopedI18n } from "@/locales/server";
import Image from "next/image";
import { FunctionComponent } from "react";

interface FeatureSectionProps {}

const Featuresection: FunctionComponent<FeatureSectionProps> = async () => {
  const t = await getScopedI18n("brick.feature");

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
            />
          </div>

          <div className="">
            <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
              {t("header.h1")}
            </h1>

            <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
              {t("header.p")}
            </p>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <svg
                  className="w-6 h-6 text-green-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  {t("best_refactory.h1")}
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  {t("best_refactory.p")}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <svg
                  className="w-6 h-6 text-green-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  {t("secure_purchase.h1")}
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  {t("secure_purchase.p")}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">
              <div className="px-8 h-20 mx-auto md:mx-0 bg-gray rounded-lg flex items-center justify-center mb-5 md:mb-0">
                <svg
                  className="w-6 h-6 text-green-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-center md:text-left">
                <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                  {t("low_cost.h1")}
                </h4>
                <p className="font-normal text-gray-400 text-xl leading-relaxed">
                  {t("low_cost.p")}
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
