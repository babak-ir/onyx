import { ILocale } from "../(home)/components/products/interfaces/productInterfaces";

export interface IBricksProduct {
  path: string;
  title: {
    en: string;
    fa: string;
    zh: string;
    ru: string;
    tr: string;
    hi: string;
  };
  imageUrl: string;
}

export interface IGetProductList {
  products: IBricksProduct[];
}

export interface IBrickProductDetailes {
  title: ILocale;
}
