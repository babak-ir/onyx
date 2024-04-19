"use client"

import Image from "next/image";
import { IProduct } from "../../interfaces/productInterfaces";
import { useState } from "react";
import ProductDetailes from "../detaile/ProductDetailes";
import { useCurrentLocale, useScopedI18n } from "../../../../../../locales/client";
import SubLayout from "../../../../client/layout";

interface IProp {
    product: IProduct
}

const ProductCard = ({ product }: IProp) => {

    const [modalData, setModalData] = useState<IProduct | undefined>(undefined);

    const t = useScopedI18n('products');
    const locale = useCurrentLocale();

    return (
        <>
            <div className="min-w-[367px] max-w-[367px] h-[664px] flex flex-col gap-7 justify-start items-start bg-tertiary">
                <div className="w-full">
                    <Image src={product.image} width={644} height={627} priority alt="customer centric1" />
                </div>
                <div className="w-full h-full p-6 flex flex-col justify-between items-end">
                    <div className="flex flex-col gap-4">
                        <h6 className="text-[17px] font-medium leading-6 text-white md:text-[22px] md:leading-7">{product.title[locale]}</h6>
                        <p className="text-xs md:text-sm font-normal text-white">
                            {product.disc[locale]}
                        </p>
                    </div>
                    <button onClick={() => setModalData(product)} className="text-sm font-medium text-tertiary py-2 px-10 bg-white">{t('readMore')}</button>
                </div>
            </div>
            <SubLayout params={{ locale }}>
                <ProductDetailes product={modalData} onClose={() => setModalData(undefined)} />
            </SubLayout>
        </>
    );
}

export default ProductCard;