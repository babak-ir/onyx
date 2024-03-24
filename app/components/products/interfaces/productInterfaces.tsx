import { StaticImageData } from "next/image";

export interface IProduct {
    id: number;
    title: string;
    disc: string;
    image: StaticImageData;
    detailes: {
        analyze: { [key: string]: string },
        attributes: string[],
        uses: string[],
        productCodes: IProductCode[]
    }
}

export interface IProductCode {
    name: string,
    code: string;
    chemical: { [key: string]: string },
    physical: string[],
    image: StaticImageData
}