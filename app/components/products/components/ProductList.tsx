import Image from "next/image";
import productConstants from "../constants/ProductConstants";
import ProductCard from "./ProductCard";

const ProductList = () => {

    return (
        <div className="flex justify-start lg:justify-end w-full gap-4 overflow-x-scroll">
            {
                productConstants.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductList;