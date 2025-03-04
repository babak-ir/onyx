"use client";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { getBrickInfo } from "../../bricks.api";
import { useCurrentLocale } from "@/locales/client";

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
      <h1>{productName}</h1>
      <h1>{product.data?.title[locale]}</h1>
    </div>
  );
}
