import ProductInfoLayout from "@/app/[locale]/(home)/components/products/layouts/ProductInfoLayout";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { IBrickExperiment } from "../../../brickProduct.interfaces";

interface IProp {
  brickExperiments: IBrickExperiment;
}

const ExperimentTabsContetnt = ({ brickExperiments }: IProp) => {
  const locale = useCurrentLocale();

  return (
    <div className="flex flex-col gap-6 py-6 w-full">
      <div className="w-full flex flex-col justify-between lg:flex-row">
        <div className="flex flex-row justify-center items-center gap-4 w-full" dir="ltr">
          {brickExperiments &&
            brickExperiments.content.map((experiment, index) => (
              <div
                key={index}
                className="flex items-start text-sm font-normal leading-6 md:text-base md:font-bold rounded-md h-full bg-gray"
              >
                <div className="min-w-[20rem] sm:min-w-[25rem] max-w-[367px] flex flex-col justify-start items-start">
                  <div className="w-full flex justify-center items-center py-8 bg-tertiary text-white rounded-t-md">
                    <span>{experiment.title}</span>
                  </div>
                  <div className="w-full h-full p-4 gap-8 lg:p-6 flex flex-col justify-between items-end">
                    {experiment.properties.map((property, index) => (
                      <div
                        key={index}
                        className="flex justify-between gap-4 w-full"
                      >
                        <span className="font-medium text-start">{property.key}</span>
                        <span className="text-xs md:text-sm font-normal text-end">
                          {property.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperimentTabsContetnt;
