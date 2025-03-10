import { getScopedI18n } from "@/locales/server";
import Image from "next/image";
import { FunctionComponent } from "react";

interface BookSectionProps {}

const BookSection: FunctionComponent<BookSectionProps> = async () => {
  const t = await getScopedI18n("brick.book");
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl xl:relative">
        <div className="bg-green-800 flex flex-col gap-4 lg:flex-row items-center justify-evenly py-14 px-8 rounded-3xl">
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
              {t("h1")}
            </h1>

            <p className="font-normal text-white text-md md:text-xl">
              {t("p")}
            </p>
          </div>

          <div className="hidden xl:block xl:absolute right-0">
            <Image src="/image/book.png" alt="Image" width={638} height={689} />
          </div>

          <div className="bg-white xl:relative px-6 py-3 rounded-3xl">
            <div className="py-3">
              <h3 className="font-semibold text-gray-900 text-3xl">
                {t("form.h3")}
              </h3>
            </div>

            <div className="py-3 w-full md:w-96">
              <input
                type="text"
                placeholder={t("form.full_name")}
                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder={t("form.email")}
                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3 relative">
              <input
                type="text"
                placeholder={t("form.date")}
                className="px-4 py-4 w-full bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
              />

              {/* <div className="inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <i data-feather="calendar"></i>
              </div> */}
            </div>

            <div className="py-3 relative">
              <input
                type="text"
                placeholder={t("form.virtual_meeting")}
                className="px-4 py-4 w-full bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />

              {/* <div className="inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <i data-feather="chevron-down"></i>
              </div> */}
            </div>

            <div className="py-3">
              <button className="w-full py-4 font-semibold text-lg text-white bg-green-700 rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
                {t("form.booking")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
