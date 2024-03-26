import { InstanceOptions, TabItem, Tabs, TabsInterface, TabsOptions } from "flowbite";
import { IProductCode } from "../../interfaces/productInterfaces";
import ProductTabContetnt from "./ProductTabContetnt";
import { useEffect } from "react";
import { useCurrentLocale, useScopedI18n } from "../../../../../../locales/client";

interface IProp {
    productCodes: IProductCode[]
}

const ProductTabs = ({ productCodes }: IProp) => {

    const locale = useCurrentLocale();

    useEffect(() => {

        const tabsElement: HTMLElement = document.getElementById('codes-tab')! as HTMLElement;

        if (tabsElement) {
            const tabElements: TabItem[] = [];

            productCodes.map((item) => (
                tabElements.push({
                    id: item.code,
                    triggerEl: document.querySelector(`#${item.code}-tirgger`)! as HTMLElement,
                    targetEl: document.querySelector(`#${item.code}-target`)! as HTMLElement,
                })
            ));

            const options: TabsOptions = {
                defaultTabId: productCodes[0].code,
                activeClasses: "text-tertiary border-b-[3px] border-tertiary",
                inactiveClasses: "text-deactivate hover:text-gray-600 hover:border-gray-300",
                onShow: () => { },
            };

            const instanceOptions: InstanceOptions = {
                id: 'codes-tab',
                override: true
            };

            const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

            tabs.show(productCodes[0].code);
        }

    }, [productCodes]);


    return (
        <div className="w-full">
            <div className="w-full bg-gray rounded-t-lg">
                <ul id="codes-tab" className="flex w-full justify-start text-sm font-medium text-center text-gray-500">
                    {
                        productCodes.map((item, index) => (

                            <li key={index} className="px-4">
                                <button type="button" id={`${item.code}-tirgger`} className="inline-flex items-center justify-center py-[14px] mb-[1px] font-normal hover:text-gray-600 text-xs md:text-sm">
                                    {item.name[locale]}
                                </button>
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div className="w-full">
                {
                    productCodes.map((item, index) => (

                        <div key={index} className="hidden" id={`${item.code}-target`}>
                            <ProductTabContetnt productCodes={item} />
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default ProductTabs;