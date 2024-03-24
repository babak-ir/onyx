import Image from "next/image";
import { IProductCode } from "../../interfaces/productInterfaces";
import ProductInfoLayout from "../../layouts/ProductInfoLayout";

interface IProp {
    productCodes: IProductCode
}

const ProductTabContetnt = ({ productCodes }: IProp) => {
    return (
        <div className="flex flex-col gap-6 py-6">
            <ProductInfoLayout title="Chemical analysis" classList="justify-between">
                {
                    productCodes &&
                    Object.entries(productCodes.chemical).map(([key, value]) => (
                        <div key={key} className="flex flex-col gap-2 items-start text-sm leading-6 text-secondary">
                            <span className="font-normal">{key}</span>
                            <span className="font-bold md:text-base">{value}</span>
                        </div>
                    ))
                }
            </ProductInfoLayout>
            <ProductInfoLayout title="Physical characteristics">
                <div className="flex flex-col justify-between lg:flex-row">
                    <div className="flex flex-col justify-center gap-4">
                        {
                            productCodes &&
                            productCodes.physical.map((item, index) => (
                                <div key={index} className="flex items-start text-sm font-normal leading-6 text-secondary md:text-base md:font-bold">
                                    <span>{index + 1}-</span>
                                    <span>{item}</span>
                                </div>
                            ))

                        }
                    </div>
                    <Image src={productCodes.image} width={300} height={142} priority alt={productCodes.name} />
                </div>
            </ProductInfoLayout>
        </div>
    );
}

export default ProductTabContetnt;