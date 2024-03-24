import { useEffect, useMemo, useRef } from "react";
import { IProduct } from "../interfaces/productInterfaces";
import { Modal, ModalOptions } from "flowbite";
import ModelLayout from "../../../../components/Layouts/ModelLayout";
import ProductInfoLayout from "../layouts/ProductInfoLayout";
import ProductTabs from "./ProductTabs";

interface IProp {
    product: IProduct | undefined;
    // openModal: boolean;
    onClose: () => void;
}

const ProductDeetailes = ({ product, onClose }: IProp) => {

    const modalOptions: ModalOptions = useMemo(() => {
        return {
            placement: "bottom-right",
            backdrop: "dynamic",
            backdropClasses: "bg-quinary fixed inset-0 z-40",
            onHide() {
                onClose();
            },
        };
    }, [onClose]);

    const modalRef = useRef(null);
    const modal = useMemo<Modal | null>(() => {
        return product ? new Modal(modalRef.current, modalOptions) : null;
    }, [modalOptions, product]);

    useEffect(() => {
        if (product) (modal as Modal).show();
    }, [product, modal]);


    return (
        <ModelLayout reff={modalRef} onClose={() => modal?.hide()} title={product?.title}>
            <div className="flex flex-col items-start gap-4">
                <ProductInfoLayout title="Analyze" classList="justify-between">
                    {
                        product &&
                        Object.entries(product.detailes.analyze).map(([key, value]) => (
                            <div key={key} className="flex flex-col gap-2 items-start text-sm leading-6 text-secondary">
                                <span className="font-normal">{key}</span>
                                <span className="font-bold md:text-base">{value}</span>
                            </div>
                        ))
                    }
                </ProductInfoLayout>
                <ProductInfoLayout title="Attributes" classList="gap-x-0 gap-y-2 flex-col lg:flex-row">
                    {
                        product &&
                        product.detailes.attributes.map((item, index) => (
                            <div key={index} className="flex flex-none w-full items-start text-sm font-normal leading-6 text-secondary md:text-base md:font-bold lg:w-1/2">
                                <span>{index + 1}-</span>
                                <span>{item}</span>
                            </div>
                        ))
                    }
                </ProductInfoLayout>
                <ProductInfoLayout title="Uses" classList="gap-x-0 gap-y-2 flex-col lg:flex-row">
                    {
                        product &&
                        product.detailes.uses.map((item, index) => (
                            <div key={index} className="flex flex-none w-full items-start text-sm font-normal leading-6 text-secondary md:text-base md:font-bold lg:w-1/2">
                                <span>{index + 1}-</span>
                                <span>{item}</span>
                            </div>
                        ))
                    }
                </ProductInfoLayout>
                {
                    product &&
                    <ProductTabs productCodes={product.detailes.productCodes} />
                }

                <button onClick={() => { }} className="w-full bg-tertiary text-white py-3 px-14 text-sm mb-8">Book Now</button>

            </div>
        </ModelLayout>
    );
}

export default ProductDeetailes;