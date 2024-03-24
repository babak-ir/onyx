import ProductList from "./components/list/ProductList";

const Products = () => {
    return (
        <div id="services" className="w-full md:px-24 pt-32">
            <div className="max-w-screen-2xl flex flex-col items-center lg:flex-row lg:justify-between gap-4 mx-auto">
                <div className="flex flex-col gap-7 justify-start items-start w-full px-6 md:p-0 lg:w-1/3">
                    <h6 className="text-2xl leading-8 font-bold text-tertiary md:text-[35px] md:leading-[45px] lg:text-[30px] lg:leading-[35px] xl:text-[45px] xl:leading-[72px]">Our Products</h6>
                    <p className="text-base text-black">
                        To see the chemical analysis of each product, click on the read more option.
                    </p>
                </div>
                <div className="w-full ps-6 md:ps-0 lg:w-2/3">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Products;