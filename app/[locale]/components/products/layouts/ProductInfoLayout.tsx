import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
    title: string;
    children?: ReactNode;
    classList?: string;
}

const ProductInfoLayout = ({ title, children, classList }: Props) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <h3 className="text-tertiary font-bold text-sm leading-6 md:text-base">{title}</h3>
            <div className={classNames("border border-primary p-4 flex flex-wrap gap-4", classList)}>
                {children}
            </div>
        </div>
    );
}

export default ProductInfoLayout;