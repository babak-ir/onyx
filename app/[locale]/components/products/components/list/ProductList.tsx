import { getCurrentLocale } from "../../../../../../locales/server";
import SubLayout from "../../../../client/layout";
import productConstants from "../../constants/ProductConstants";
import ProductCard from "./ProductCard";

const ProductList = () => {

    const locale = getCurrentLocale();

    return (
        <div className="flex justify-start 2xl:justify-end w-full gap-4 overflow-x-auto no-scrollbar">
            {
                productConstants.map((product) => (
                    <SubLayout params={{ locale }} key={product.id} >
                        <ProductCard product={product} />
                    </SubLayout>
                ))
            }
        </div>
    );
}

export default ProductList;