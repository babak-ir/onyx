import Image from "next/image";
import { FunctionComponent } from "react";

interface GallerySectionProps {}

const GallerySection: FunctionComponent<GallerySectionProps> = () => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          Our Gallery
        </h1>

        <div className="hidden md:block flex items-center text-center space-x-10 lg:space-x-20 mb-12">
          <a
            href="#"
            className="px-6 py-2 bg-green-800 text-white font-semibold text-xl rounded-lg hover:bg-green-600 transition ease-in-out duration-500"
          >
            All
          </a>
          <a
            href="#"
            className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500"
          >
            Fireclay Bricks
          </a>
          <a
            href="#"
            className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500"
          >
            High Alumina Bricks
          </a>
          <a
            href="#"
            className="px-6 py-2 text-gray-900 font-normal text-xl rounded-lg hover:bg-gray-200 hover:text-gray-400 transition ease-in-out duration-500"
          >
            Silica Bricks
          </a>
        </div>

        <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
          <div>
            <Image
              src="/image/wall-building.jpeg"
              alt="image"
              width={411}
              height={280}
              className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <Image
              src="/image/Refractory-bricks-fire-bricks.webp"
              alt="image"
              width={411}
              height={598}
              className="hover:opacity-75 transition ease-in-out duration-500"
            />
          </div>

          <div>
            <Image
              src="/image/shutterstock_1374288590.jpg"
              alt="image"
              width={411}
              height={280}
              className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <Image
              src="/image/brand-new-65mm-refractory-fire-clay-bricks-48percent-alumina-ideal-for-furnaces-and-pizza-ovens-reclaimed-brick-company-1.webp"
              alt="image"
              width={411}
              height={280}
              className="mb-3 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <Image
              src="/image/Kiln-Refractory-Bricks-For-Sale.jpg"
              alt="image"
              width={411}
              height={280}
              className="hover:opacity-75 transition ease-in-out duration-500"
            />
          </div>

          <div>
            <Image
              src="/image/kiln-brick-500x500.webp"
              alt="image"
              width={411}
              height={598}
              className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500"
            />
            <Image
              src="/image/refractory-bricks.jpg"
              alt="image"
              width={411}
              height={280}
              className="hover:opacity-75 transition ease-in-out duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
