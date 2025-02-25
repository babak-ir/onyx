"use client";
import { FunctionComponent } from "react";
import { IBricksProduct } from "../brickProduct.interfaces";
import brickProductList from "../products/brick.product.constant";
import Shimmer from "@/components/img/Shimmer";
import { useCurrentLocale } from "@/locales/client";
import { useRouter } from "next/navigation";

interface GallerySectionProps {}

const GallerySection: FunctionComponent<GallerySectionProps> = () => {
  const router = useRouter();
  const locale = useCurrentLocale();

  const goToDetailes = (id: number) => {
    router.push("/");
  };

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          Our Gallery
        </h1>

        <div className="flex flex-wrap justify-center">
          {brickProductList?.map((product: IBricksProduct) => (
            <div
              onClick={() => goToDetailes(product.id)}
              className="w-full flex flex-col justify-center items-center sm:w-1/2 md:w-1/3 p-4 cursor-pointer"
              key={product.id}
            >
              <Shimmer
                src={product.imageUrl}
                width={644}
                height={627}
                alt="customer centric1"
                className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500 w-full h-full object-cover"
              />
              <span>{product.title[locale]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
