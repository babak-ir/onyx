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
            zh: "无与伦比的质量保证",
            ru: "Несравненное обеспечение качества",
        },
        disc: {
            en: "Ideal for a wide array of industrial applications, our standard micronized kaolinite boasts unparalleled purity and consistency. From ceramics to plastics, it serves as the cornerstone for achieving exceptional results in your manufacturing processes.",
            fa: "ایده آل برای طیف گسترده ای از کاربردهای صنعتی، کائولینیت میکرونیزه استاندارد ما دارای خلوص و قوام بی نظیر است. از سرامیک گرفته تا پلاستیک، به عنوان سنگ بنای دستیابی به نتایج عالی در فرآیندهای تولید شما عمل می کند.",
            zh: "标准的微米化高岭土适用于广泛的工业应用，具有无与伦比的纯度和一致性。从陶瓷到塑料，它是实现卓越生产结果的基石。",
            ru: "Идеально подходит для широкого спектра промышленных применений, наш стандартный микронизированный каолинит отличается непревзойденной чистотой и стабильностью. От керамики до пластмасс, он служит основой для достижения выдающихся результатов в ваших производственных процессах.",
        },
        image: '/unmatched.png',

        detailes: {
            attributes: [
                {
                    en: "Baking temperature 1050 degrees Celsius",
                    fa: "دمای پخت 1050 درجه سانتی گراد",
                    zh: "烧结温度1050摄氏度",
                    ru: "Температура обжига 1050 градусов Цельсия",
                },
                {
                    en: "Dry flexural strength (MOR): 220 kg/cm",
                    fa: "استحکام خمشی (MOR) kg/cm خشک: 220",
                    zh: "干弯曲强度(MOR): 220 kg/cm",
                    ru: "Сухая изгибная прочность (MOR): 220 кг/см",
                },
                {
                    en: "Cream baking color",
                    fa: "رنگ پخت قرمز پر رنگ",
                    zh: "奶油色烧成颜色",
                    ru: "Цвет обжига: кремовый",
                },
                {
                    en: "0.5% firing shrinkage",
                    fa: "انقباض پخت 0.5 درصد",
                    zh: "烧成收缩率0.5%",
                    ru: "Усадка при обжиге 0,5%",
                }
            ],
            uses: [
                {
                    en: "The body of porcelain white ceramic tiles",
                    fa: "بدنه کاشی و سرامیک سفید پخت و پرسلانی",
                    zh: "瓷白陶瓷砖的主体",
                    ru: "Корпус фарфоровых белых керамических плиток",
                },
                {
                    en: "Fire brick facade",
                    fa: "آجر نسوز نما",
                    zh: "耐火砖外墙",
                    ru: "Фасад из огнеупорного кирпича",
                }
            ],
            productCodes: {
                name: {
                    en: "Product code: KG-R",
                    fa: "کد محصول: KG-R",
                    zh: "产品代码: KG-R",
                    ru: "Код продукта: KG-R",
                },
                code: "KG-R",
                chemical: {
                    "L.O.I": "7.09",
                    "TiO2": "0.41",
                    "SO3": "0.64",
                    "P2O5": "0.18",
                    "BaO": "0.08",
                    "MgO": "0.92",
                    "Na2O": "1.54",
                    "K2O": "4.35",
                    "CaO": "3.02",
                    "Fe2O3": "1.9",
                    "Al2O3": "14.03",
                    "SiO2": "65.85"
                },
                physical: [
                    {
                        en: "Firing temperature: 1050 degrees Celsius",
                        fa: "دمای پخت: 1050 درجه سانتی گراد",
                        zh: "烧结温度: 1050摄氏度",
                        ru: "Температура обжига: 1050 градусов Цельсия",
                    },
                    {
                        en: "Baking color: deep red",
                        fa: "رنگ پخت: قرمز پر رنگ",
                        zh: "烧成颜色: 深红色",
                        ru: "Цвет обжига: темно-красный",
                    },
                    {
                        en: "Product type: soft lump",
                        fa: "نوع محصول: کلوخ فله نرم",
                        zh: "产品类型: 软块",
                        ru: "Тип продукта: мягкий ком",
                    },
                    {
                        en: "Baking shrinkage: 0.5%",
                        fa: "انقباض پخت: ۰/۵ درصد",
                        zh: "烧成收缩率: 0.5%",
                        ru: "Усадка при обжиге: 0,5%",
                    }
                ],
                image: '/kg-r-300x142.jpg'
            }
        }
    },
    {
        id: 2,
        title: {
            en: "Specialty Micronized Kaolinite",
            fa: "کائولینیت میکرونیزه مخصوص",
            zh: "特种微米化高岭土",
            ru: "Специальный микронизированный каолинит",
        },
        disc: {
            en: "Tailored to meet the unique demands of specialized industries, our specialty micronized kaolinite offers enhanced properties to optimize performance in niche applications. Whether you require precise particle size distribution or specific surface modifications, we deliver solutions that exceed expectations.",
            fa: "کائولینیت میکرونیزه ویژه ما که برای پاسخگویی به نیازهای منحصر به فرد صنایع تخصصی طراحی شده است، خواص بهبود یافته ای را برای بهینه سازی عملکرد در کاربردهای خاص ارائه می دهد. اگر به توزیع دقیق اندازه ذرات یا تغییرات سطحی خاص نیاز داشته باشید، ما راه حل هایی ارائه می دهیم که فراتر از انتظارات است.",
            zh: "为了满足专业行业的独特需求，我们的特种微米化高岭土提供了增强的性能，以优化在特定应用中的表现。无论您需要精确的粒度分布还是特定的表面改性，我们都能提供超出期望的解决方案。",
            ru: "Созданный для удовлетворения уникальных потребностей специализированных отраслей, наш специальный микронизированный каолинит предлагает улучшенные свойства для оптимизации производительности в нишевых приложениях. Независимо от того, требуется ли вам точное распределение размеров частиц или специфические модификации поверхности, мы предлагаем решения, превосходящие ожидания.",
        },
        image: '/kaolinite.png',
        detailes: {
            attributes: [
                {
                    en: "Baking temperature 1200 degrees Celsius",
                    fa: "دمای پخت 1200 درجه سانتی گراد",
                    zh: "烧结温度1200摄氏度",
                    ru: "Температура обжига 1200 градусов Цельсия",
                },
                {
                    en: "Dry flexural strength (MOR): 220 kg/cm",
                    fa: "استحکام خمشی (MOR) خشک: 220 kg/cm",
                    zh: "干弯曲强度(MOR): 220 kg/cm",
                    ru: "Сухая изгибная прочность (MOR): 220 кг/см",
                },
                {
                    en: "Cream baking color",
                    fa: "رنگ پخت سفید",
                    zh: "奶油色烧成颜色",
                    ru: "Цвет обжига: белый",
                },
                {
                    en: "0.5% firing shrinkage",
                    fa: "انقباض پخت 0.5 درصد",
                    zh: "烧成收缩率0.5%",
                    ru: "Усадка при обжиге 0,5%",
                }
            ],
            uses: [
                {
                    en: "The body of porcelain white ceramic tiles",
                    fa: "بدنه کاشی و سرامیک سفید پخت و پرسلانی",
                    zh: "瓷白陶瓷砖的主体",
                    ru: "Корпус фарфоровых белых керамических плиток",
                },
                {
                    en: "Fire brick facade",
                    fa: "آجر نسوز نما",
                    zh: "耐火砖外墙",
                    ru: "Фасад из огнеупорного кирпича",
                }
            ],
            productCodes: {
                name: {
                    en: "Product code: KG-W",
                    fa: "کد محصول: KG-W3",
                    zh: "产品代码: KG-W",
                    ru: "Код продукта: KG-W",
                },
                code: "KG-W3",
                chemical: {
                    "L.O.I": "8.9",
                    "TiO2": "0.6",
                    "SO3": "0.3",
                    "P2O5": "0.4",
                    "BaO": "0.1",
                    "MgO": "0.05",
                    "Na2O": "0.3",
                    "K2O": "1.15",
                    "CaO": "0.2",
                    "Fe2O3": "0.35",
                    "Al2O3": "22.9",
                    "SiO2": "64.55"
                },
                physical: [
                    {
                        en: "Baking temperature 1200 degrees",
                        fa: "دمای پخت: 1200 درجه",
                        zh: "烧结温度: 1200度",
                        ru: "Температура обжига: 1200 градусов",
                    },
                    {
                        en: "Baking color: white",
                        fa: "رنگ پخت: سفید",
                        zh: "烧成颜色: 白色",
                        ru: "Цвет обжига: белый",
                    },
                    {
                        en: "Product type: bulk lump",
                        fa: "نوع محصول: کلوخ فله",
                        zh: "产品类型: 散装块",
                        ru: "Тип продукта: комовая масса",
                    },
                    {
                        en: "Product lump density: 2kg/cm3",
                        fa: "دانسیته کلوخ محصول: 2kg/cm3",
                        zh: "产品块密度: 2kg/cm3",
                        ru: "Плотность комовой массы: 2 кг/см3",
                    }

                ],
                image: '/kg-w-300x155.jpg'
            }
        }
    }
];

export default productConstants;