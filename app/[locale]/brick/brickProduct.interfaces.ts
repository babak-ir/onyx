export interface IBricksProduct {
  id: number;
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
