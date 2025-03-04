export interface IProduct {
    id: number;
    title: ILocale;
    disc: ILocale;
    image: string;
    detailes: {
        attributes: ILocale[],
        uses: ILocale[],
        productCodes: IProductCode
    }
}

export interface IProductCode {
    name: ILocale;
    code: string;
    chemical: { [key: string]: string };
    physical: ILocale[];
    image: string;
}

export interface ILocale {
    en: string;
    fa: string;
    zh: string;
    ru: string;
    tr: string;
    hi: string;
}