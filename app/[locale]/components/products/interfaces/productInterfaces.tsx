import { StaticImageData } from "next/image";

export interface IProduct {
    id: number;
    title: ILocale;
    disc: ILocale;
    image: StaticImageData;
    detailes: {
        analyze: { [key: string]: string },
        attributes: ILocale[],
        uses: ILocale[],
        productCodes: IProductCode[]
    }
}

export interface IProductCode {
    name: ILocale;
    code: string;
    chemical: { [key: string]: string };
    physical: ILocale[];
    image: StaticImageData;
}

export interface ILocale {
    en: string;
    fa: string;
}