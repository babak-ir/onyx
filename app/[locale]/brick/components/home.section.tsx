import Image from "next/image";
import { FunctionComponent } from "react";

interface HomeSectionProps {}

const HomeSection: FunctionComponent<HomeSectionProps> = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center xl:justify-start mt-40">
      <div className="mt-28 text-center xl:text-left">
        <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6">
          Heat-Resistant Refractory Bricks
        </h1>

        <p className="font-normal text-xl text-gray-400 leading-relaxed mb-12">
          What specific type of refractory bricks do you need for your project?
        </p>

        <button className="px-6 py-4 bg-green-700 text-white font-semibold text-lg rounded-xl hover:bg-green-900 transition ease-in-out duration-500">
          Contact us
        </button>
      </div>

      <div className="z-0 top-0 right-0">
        <Image
          src="/image/Refractory-bricks.webp"
          alt="image"
          width={800}
          height={900}
          className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
        />
      </div>
    </div>
  );
};

export default HomeSection;
