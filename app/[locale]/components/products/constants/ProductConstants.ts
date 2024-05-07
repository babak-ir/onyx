// import kaolinite from "../../../../../public/kaolinite.png";
// import unmatched from "../../../../../public/unmatched.png";
// import kgR from "../../../../../public/kg-r-300x142.jpg";
// import kgW from "../../../../../public/kg-w-300x155.jpg";

import { IProduct } from "../interfaces/productInterfaces";

const productConstants: IProduct[] = [
    {
        id: 1,
        title: {
            en: "Unmatched Quality Assurance",
            fa: "تضمین کیفیت بی نظیر",
        },
        disc: {
            en: "Ideal for a wide array of industrial applications, our standard micronized kaolinite boasts unparalleled purity and consistency. From ceramics to plastics, it serves as the cornerstone for achieving exceptional results in your manufacturing processes.",
            fa: "ایده آل برای طیف گسترده ای از کاربردهای صنعتی، کائولینیت میکرونیزه استاندارد ما دارای خلوص و قوام بی نظیر است. از سرامیک گرفته تا پلاستیک، به عنوان سنگ بنای دستیابی به نتایج عالی در فرآیندهای تولید شما عمل می کند.",
        },
        image: '/unmatched.png',
        detailes: {
            attributes: [
                {
                    en: "Baking temperature 1100 degrees Celsius",
                    fa: "دمای پخت 1100 درجه سانتی گراد",
                },
                {
                    en: "Dry flexural strength (MOR): 220 kg/cm",
                    fa: "استحکام خمشی (MOR) خشک: kg/cm220",
                },
                {
                    en: "Cream baking color",
                    fa: "رنگ پخت کرم",
                },
                {
                    en: "0.5% firing shrinkage",
                    fa: "انقباض پخت 0.5 درصد",
                }
            ],
            uses: [
                {
                    en: "The body of porcelain white ceramic tiles",
                    fa: "بدنه کاشی و سرامیک سفید پخت و پرسلانی",
                },
                {
                    en: "Fire brick facade",
                    fa: "آجر نسوز نما"
                }
            ],
            productCodes: {
                name: {
                    en: "Product code: KG-W",
                    fa: "کد محصول: KG-W",
                },
                code: "KG-W",
                chemical: { "SiO2": "68.3", "Al2O3": "17.5", "Fe2O3": "1.6", "Cao": "1.3", "K2O": "2.4", "Na2O": "2.7", "Mgo": "0.9", "Bao": "0", "P2O5": "0", "SO3": "0", "TiO2": "0.4", "L.O.I": "4.9" },
                physical: [
                    {
                        en: "Baking temperature 1050 degrees",
                        fa: "دمای پخت بالای ۱۴۰۰ درجه",
                    },
                    {
                        en: "Red baking color",
                        fa: "رنگ پخت سفید",
                    },
                    {
                        en: "The shape of the product is a soft lump with a cooking shrinkage of 0.5%",
                        fa: "شکل محصول کلوخ فله نرم انقباض پخت ۰/۵ درصد",
                    }

                ],
                image: '/kg-w-300x155.jpg'
            }
        }
    },
    {
        id: 2,
        title: {
            en: "Specialty Micronized Kaolinite",
            fa: "کائولینیت میکرونیزه مخصوص",
        },
        disc: {
            en: "Tailored to meet the unique demands of specialized industries, our specialty micronized kaolinite offers enhanced properties to optimize performance in niche applications. Whether you require precise particle size distribution or specific surface modifications, we deliver solutions that exceed expectations.",
            fa: "کائولینیت میکرونیزه ویژه ما که برای پاسخگویی به نیازهای منحصر به فرد صنایع تخصصی طراحی شده است، خواص بهبود یافته ای را برای بهینه سازی عملکرد در کاربردهای خاص ارائه می دهد. اگر به توزیع دقیق اندازه ذرات یا تغییرات سطحی خاص نیاز داشته باشید، ما راه حل هایی ارائه می دهیم که فراتر از انتظارات است.",
        },
        image: '/kaolinite.png',
        detailes: {
            attributes: [
                {
                    en: "Baking temperature 1100 degrees Celsius",
                    fa: "دمای پخت 1100 درجه سانتی گراد",
                },
                {
                    en: "Dry flexural strength (MOR): 220 kg/cm",
                    fa: "استحکام خمشی (MOR) خشک: kg/cm220",
                },
                {
                    en: "Cream baking color",
                    fa: "رنگ پخت کرم",
                },
                {
                    en: "0.5% firing shrinkage",
                    fa: "انقباض پخت 0.5 درصد",
                }
            ],
            uses: [
                {
                    en: "The body of porcelain white ceramic tiles",
                    fa: "بدنه کاشی و سرامیک سفید پخت و پرسلانی",
                },
                {
                    en: "Fire brick facade",
                    fa: "آجر نسوز نما"
                }
            ],
            productCodes: {
                name: {
                    en: "Product code: KG-R",
                    fa: "کد محصول: KG-R",
                },
                code: "KG-R",
                chemical: { "SiO2": "76", "Al2O3": "14.7", "Fe2O3": "0.7", "Cao": "0.6", "K2O": "2.9", "Na2O": "0.14", "Mgo": "0.1", "Bao": "-", "P2O5": "0", "SO3": "-", "TiO2": "0.05", "L.O.I": "4.8" },
                physical: [
                    {
                        en: "Baking temperature 1050 degrees",
                        fa: "دمای پخت 1050 درجه سانتی گراد",
                    },
                    {
                        en: "Red baking color",
                        fa: "رنگ پخت قرمز پر رنگ",
                    },
                    {
                        en: "The shape of the product is a soft lump with a cooking shrinkage of 0.5%",
                        fa: "شکل محصول کلوخ فله نرم انقباض پخت ۰/۵ درصد",
                    }
                ],
                image: '/kg-r-300x142.jpg'
            }
        }
    }
];

export default productConstants;