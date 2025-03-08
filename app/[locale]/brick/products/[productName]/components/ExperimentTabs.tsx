import { InstanceOptions, TabItem, Tabs, TabsInterface, TabsOptions } from "flowbite";
import ProductTabContetnt from "./ExperimentTabsContetnt";
import { useEffect } from "react";
import { IBrickExperiment } from "../../../brickProduct.interfaces";

interface IProp {
    brickExperiments: IBrickExperiment[]
}

const ExperimentTabs = ({ brickExperiments }: IProp) => {

    useEffect(() => {
        
        const tabsElement: HTMLElement = document.getElementById('codes-tab')! as HTMLElement;

        if (tabsElement) {
            const tabElements: TabItem[] = [];

            brickExperiments.map((item) => (
                tabElements.push({
                    id: item.id.toString(),
                    triggerEl: document.querySelector(`#tirgger_${item.id}`)! as HTMLElement,
                    targetEl: document.querySelector(`#target_${item.id}`)! as HTMLElement,
                })
            ));

            const options: TabsOptions = {
                defaultTabId: brickExperiments[0].id.toString(),
                activeClasses: "font-semibold bg-tertiary text-white rounded-t-lg",
                inactiveClasses: "text-deactivate hover:text-gray-600 hover:border-gray-300",
                onShow: () => { },
            };

            const instanceOptions: InstanceOptions = {
                id: 'codes-tab',
                override: true
            };

            const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

            tabs.show(brickExperiments[0].id.toString());
        }

    }, [brickExperiments]);


    return (
        <div className="w-full">
            <div className="w-full bg-gray rounded-t-lg">
                <ul id="codes-tab" className="flex w-full overflow-x-auto max-w-screen-xl justify-start text-sm font-medium text-center text-gray-500">
                    {
                        brickExperiments.map((item, index) => (

                            <li key={index} className="max-w-full">
                                <button type="button" id={`tirgger_${item.id}`} className="px-4 min-w-max inline-flex items-center justify-center py-[14px] font-normal hover:text-gray-600 text-xs md:text-sm">
                                    {item.title}
                                </button>
                            </li>

                        ))
                    }
                </ul>
            </div>
            <div className="w-full">
                {
                    brickExperiments.map((item, index) => (

                        <div key={index} className="hidden" id={`target_${item.id}`}>
                            <ProductTabContetnt brickExperiments={item} />
                        </div>

                    ))
                }
            </div>
        </div>
    );
}

export default ExperimentTabs;