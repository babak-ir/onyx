import { getScopedI18n } from "@/locales/server";
import { FunctionComponent } from "react";

interface FooterSection {}

const FooterSection: FunctionComponent<FooterSection> = async () => {
  const t = await getScopedI18n("brick.footer");
  return (
    <footer className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          {/* <div className="text-center lg:text-start mb-10 lg:mb-0">
            <div className="flex justify-center lg:justify-start mb-5">
              <Image
                src="/image/footer-logo.png"
                alt="Image"
                width={200}
                height={57}
              />
            </div>

            <p className="font-light text-gray-400 text-xl mb-10">
              Get your dream house with D’house
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-5">
              <a
                href="#"
                className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-green-800 hover:text-white transition ease-in-out duration-500"
              >
                <i data-feather="facebook"></i>
              </a>

              <a
                href="#"
                className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-green-800 hover:text-white transition ease-in-out duration-500"
              >
                <i data-feather="twitter"></i>
              </a>

              <a
                href="#"
                className="px-3 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-green-800 hover:text-white transition ease-in-out duration-500"
              >
                <i data-feather="linkedin"></i>
              </a>
            </div>
          </div> */}

          <div className="text-center lg:text-start mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-900 text-2xl mb-6">
              {t("sitemap")}
            </h4>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("home")}
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("features")}
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("gallery")}
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("testimoni")}
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("book")}
            </a>
          </div>

          <div className="text-center lg:text-start mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-900 text-2xl mb-6">
              {t("landing")}
            </h4>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("mobile_app")}
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("property")}
            </a>
          </div>

          <div className="text-center lg:text-start">
            <h4 className="font-semibold text-gray-900 text-2xl mb-6">
              {t("utility")}
            </h4>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("faq")}
            </a>

            <a
              href="#"
              className="block font-light text-gray-400 text-xl mb-6 hover:text-gray-800 transition ease-in-out duration-300"
            >
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
