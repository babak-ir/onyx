import productConstants from "../constants/ProductConstants";
import ProductCard from "./ProductCard";

const ProductList = () => {

    return (
        <div className="flex justify-start lg:justify-end w-full gap-4 overflow-x-auto no-scrollbar">
            {
                productConstants.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductList;