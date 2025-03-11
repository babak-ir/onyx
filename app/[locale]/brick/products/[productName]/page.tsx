"use client";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { getBrickInfo } from "../../bricks.api";
import { useCurrentLocale } from "@/locales/client";
import { IContent } from "../../brickProduct.interfaces";
import Shimmer from "@/components/img/Shimmer";
import ExperimentTabs from "./components/ExperimentTabs";

type Props = {
  params: { productName: string };
};

export default function ProductPage({ params }: Props) {
  const { productName } = params;
  const locale = useCurrentLocale();

  // Fetch product data based on productName
  const product = useQuery({
    queryKey: ["brickProduct"],
    queryFn: async () => {
      return await getBrickInfo(productName);
    },
  });

  if (!product) {
    notFound(); // Render the 404 page if the product is not found
  }

  return (
    <div>
      <div className="flex flex-col gap-8">
        <Shimmer
          src={product.data?.imageUrl || ""}
          width={500}
          height={500}
          alt="customer centric1 w-full"
          className="mb-4 md:mb-6 lg:mb-8 hover:opacity-75 transition ease-in-out duration-500 w-full h-full object-cover"
        />
        {product.data?.content.map((content: IContent, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <h1 className="text-2xl font-semibold">
              {content.title && content.title[locale]}
            </h1>
            <p>{content.text && content.text[locale]}</p>
            {content.bullets && (
              <ul className="list-disc list-inside space-y-2 ms-8">
                {content.bullets.map((bullet, index) => (
                  <li key={index}>{bullet[locale]}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {product.data?.experiments && (
          <ExperimentTabs brickExperiments={product.data?.experiments || []} />
        )}
      </div>
    </div>
  );
}
