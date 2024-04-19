import { MutableRefObject, ReactNode, useRef } from "react";

interface Props {
    children?: ReactNode;
    reff: MutableRefObject<null>;
    onClose: () => void;
    title: string | undefined;
    subTitle?: string | undefined;
}

const ModelLayout = ({ children, reff, onClose, title, subTitle }: Props) => {

    const actionsRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    let maxHeight = '70vh';
    if (actionsRef.current && headerRef.current) {
        maxHeight = `calc(${maxHeight} - ${actionsRef.current.getBoundingClientRect().height + headerRef.current.getBoundingClientRect().height}px)`;
    }


    return (
        <div ref={reff} className="fixed start-0 top-0 end-0 z-50 items-center justify-center hidden h-full">
            <div className="relative flex justify-center items-center w-full h-full max-w-5xl p-0 md:px-4 md:max-h-[70vh]">
                <div className="bg-quaternary px-6 h-full w-full md:h-fit md:w-fit">
                    <div ref={headerRef} className="flex justify-between items-center border-b border-b-primary pt-8 pb-6 lg:pb-8">
                        <div className="flex flex-col">
                            <h3 className="text-secondary text-[17px] leading-6 font-medium lg:teaxt-[22px] lg:leading-7">{title}</h3>
                            {
                                subTitle &&
                                <h6 className="font-normal text-gray-100 text-xs md:text-sm">{subTitle}</h6>
                            }
                        </div>
                        <button className="inline-flex items-center justify-center p-2 cursor-pointer bg-tertiary" onClick={() => onClose()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-y-auto h-full max-h-[90vh] md:max-h-[70vh] pt-4 pe-4">
                        {children}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ModelLayout;