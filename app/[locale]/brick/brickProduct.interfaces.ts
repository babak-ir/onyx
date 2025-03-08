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

// export interface IBrickProductDetailes {
//   title: ILocale;
// }

export interface IBrickProductDetail {
  title: ILocale;
  imageUrl: string;
  content: IContent[];
  experiments: IBrickExperiment[];
}
export interface IContent {
  title: ILocale;
  text: ILocale;
  bullets: ILocale[];
}

export interface IBrickExperiment {
  title: string;
  content: IExperimentContent[];
  id: number;
}

export interface IExperimentContent {
  title: string;
  properties: { key: string; value: string }[];
}
