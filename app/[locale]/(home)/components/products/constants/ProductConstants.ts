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
            hi: "अतुलनीय गुणवत्ता आश्वासन",
            tr: "Eşsiz Kalite Güvencesi",
        },
        disc: {
            en: "Ideal for a wide array of industrial applications, our standard micronized kaolinite boasts unparalleled purity and consistency. From ceramics to plastics, it serves as the cornerstone for achieving exceptional results in your manufacturing processes.",
            fa: "ایده آل برای طیف گسترده ای از کاربردهای صنعتی، کائولینیت میکرونیزه استاندارد ما دارای خلوص و قوام بی نظیر است. از سرامیک گرفته تا پلاستیک، به عنوان سنگ بنای دستیابی به نتایج عالی در فرآیندهای تولید شما عمل می کند.",
            zh: "标准的微米化高岭土适用于广泛的工业应用，具有无与伦比的纯度和一致性。从陶瓷到塑料，它是实现卓越生产结果的基石。",
            ru: "Идеально подходит для широкого спектра промышленных применений, наш стандартный микронизированный каолинит отличается непревзойденной чистотой и стабильностью. От керамики до пластмасс, он служит основой для достижения выдающихся результатов в ваших производственных процессах.",
            hi: "विभिन्न प्रकार के औद्योगिक अनुप्रयोगों के लिए आदर्श, हमारा मानक माइक्रोनाइज्ड काओलिनाइट अद्वितीय शुद्धता और स्थिरता का दावा करता है। सिरेमिक से लेकर प्लास्टिक तक, यह आपके विनिर्माण प्रक्रियाओं में उत्कृष्ट परिणाम प्राप्त करने के लिए आधारशिला के रूप में कार्य करता है।",
            tr: "Geniş bir endüstriyel uygulama yelpazesi için ideal olan standart mikroize kaolinimiz, benzersiz saflık ve tutarlılık sunar. Seramikten plastiğe kadar, üretim süreçlerinizde olağanüstü sonuçlar elde etmek için köşe taşı olarak hizmet eder.",
        },
        image: '/unmatched.png',

        detailes: {
            attributes: [
                {
                    en: "Baking temperature 1050 degrees Celsius",
                    fa: "دمای پخت 1050 درجه سانتی گراد",
                    zh: "烧结温度1050摄氏度",
                    ru: "Температура обжига 1050 градусов Цельсия",
                    hi: "बेकिंग तापमान 1050 डिग्री सेल्सियस",
                    tr: "Pişirme sıcaklığı 1050 derece Santigrat",
                },
                {
                    en: "Cream baking color",
                    fa: "رنگ پخت قرمز پر رنگ",
                    zh: "奶油色烧成颜色",
                    ru: "Цвет обжига: кремовый",
                    hi: "क्रीम बेकिंग रंग",
                    tr: "Krem pişirme rengi",
                },
                {
                    en: "0.5% firing shrinkage",
                    fa: "انقباض پخت 0.5 درصد",
                    zh: "烧成收缩率0.5%",
                    ru: "Усадка при обжиге 0,5%",
                    hi: "0.5% फायरिंग संकोचन",
                    tr: "0.5% pişirme büzülmesi",
                }
            ],
            uses: [
                {
                    en: "The body of porcelain white ceramic tiles",
                    fa: "بدنه کاشی و سرامیک سفید پخت و پرسلانی",
                    zh: "瓷白陶瓷砖的主体",
                    ru: "Корпус фарфоровых белых керамических плиток",
                    hi: "पोर्सिलेन व्हाइट सिरेमिक टाइल्स का शरीर",
                    tr: "Porselen beyaz seramik karoların gövdesi",
                },
                {
                    en: "Fire brick facade",
                    fa: "آجر نسوز نما",
                    zh: "耐火砖外墙",
                    ru: "Фасад из огнеупорного кирпича",
                    hi: "फायर ब्रिक मुखौटा",
                    tr: "Ateş tuğlası cephe",
                }
            ],
            productCodes: {
                name: {
                    en: "Product code: KG-R",
                    fa: "کد محصول: KG-R",
                    zh: "产品代码: KG-R",
                    ru: "Код продукта: KG-R",
                    hi: "उत्पाद कोड: KG-R",
                    tr: "Ürün kodu: KG-R",
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
                        hi: "फायरिंग तापमान: 1050 डिग्री सेल्सियस",
                        tr: "Pişirme sıcaklığı: 1050 derece Santigrat",
                    },
                    {
                        en: "Baking color: deep red",
                        fa: "رنگ پخت: قرمز پر رنگ",
                        zh: "烧成颜色: 深红色",
                        ru: "Цвет обжига: темно-красный",
                        hi: "बेकिंग रंग: गहरा लाल",
                        tr: "Pişirme rengi: koyu kırmızı",
                    },
                    {
                        en: "Product type: soft lump",
                        fa: "نوع محصول: کلوخ فله نرم",
                        zh: "产品类型: 软块",
                        ru: "Тип продукта: мягкий ком",
                        hi: "उत्पाद प्रकार: सॉफ्ट गांठ",
                        tr: "Ürün tipi: yumuşak topak",
                    },
                    {
                        en: "Baking shrinkage: 0.5%",
                        fa: "انقباض پخت: ۰/۵ درصد",
                        zh: "烧成收缩率: 0.5%",
                        ru: "Усадка при обжиге: 0,5%",
                        hi: "बेकिंग संकोचन: 0.5%",
                        tr: "Pişirme büzülmesi: %0.5",
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
            hi: "विशेषता माइक्रोनाइज्ड काओलिनाइट",
            tr: "Özel Mikronize Kaolin",
        },
        disc: {
            en: "Tailored to meet the unique demands of specialized industries, our specialty micronized kaolinite offers enhanced properties to optimize performance in niche applications. Whether you require precise particle size distribution or specific surface modifications, we deliver solutions that exceed expectations.",
            fa: "کائولینیت میکرونیزه ویژه ما که برای پاسخگویی به نیازهای منحصر به فرد صنایع تخصصی طراحی شده است، خواص بهبود یافته ای را برای بهینه سازی عملکرد در کاربردهای خاص ارائه می دهد. اگر به توزیع دقیق اندازه ذرات یا تغییرات سطحی خاص نیاز داشته باشید، ما راه حل هایی ارائه می دهیم که فراتر از انتظارات است.",
            zh: "为了满足专业行业的独特需求，我们的特种微米化高岭土提供了增强的性能，以优化在特定应用中的表现。无论您需要精确的粒度分布还是特定的表面改性，我们都能提供超出期望的解决方案。",
            ru: "Созданный для удовлетворения уникальных потребностей специализированных отраслей, наш специальный микронизированный каолинит предлагает улучшенные свойства для оптимизации производительности в нишевых приложениях. Независимо от того, требуется ли вам точное распределение размеров частиц или специфические модификации поверхности, мы предлагаем решения, превосходящие ожидания.",
            hi: "विशेष उद्योगों की अनूठी मांगों को पूरा करने के लिए तैयार, हमारा विशेषता माइक्रोनाइज्ड काओलिनाइट विशिष्ट अनुप्रयोगों में प्रदर्शन को अनुकूलित करने के लिए उन्नत गुण प्रदान करता है। चाहे आपको सटीक कण आकार वितरण या विशिष्ट सतह संशोधनों की आवश्यकता हो, हम ऐसी समाधान प्रदान करते हैं जो उम्मीदों से परे हैं।",
            tr: "Özel endüstrilerin benzersiz taleplerini karşılamak için tasarlanmış özel mikronize kaolinimiz, niş uygulamalarda performansı optimize etmek için geliştirilmiş özellikler sunar. İster hassas partikül boyutu dağılımı ister belirli yüzey modifikasyonları gerektiriyor olun, beklentileri aşan çözümler sunuyoruz.",
        },
        image: '/kaolinite.png',
        detailes: {
            attributes: [
                {
                    en: "Baking temperature 1200 degrees Celsius",
                    fa: "دمای پخت 1200 درجه سانتی گراد",
                    zh: "烧结温度1200摄氏度",
                    ru: "Температура обжига 1200 градусов Цельсия",
                    hi: "बेकिंग तापमान 1200 डिग्री सेल्सियस",
                    tr: "Pişirme sıcaklığı 1200 derece Santigrat",
                },
                {
                    en: "Dry flexural strength (MOR): 15 kg/cm2",
                    fa: "استحکام خمشی خشک (MOR) : ۱۵ kg/cm2",
                    zh: "干弯曲强度(MOR): 15 kg/cm2",
                    ru: "Сухая изгибная прочность (MOR): 15 кг/см2",
                    hi: "सूखी मोड़ने की ताकत (MOR): 15 kg/cm2",
                    tr: "Kuru eğilme mukavemeti (MOR): 15 kg/cm2",
                },
                {
                    en: "Cream baking color",
                    fa: "رنگ پخت سفید",
                    zh: "奶油色烧成颜色",
                    ru: "Цвет обжига: белый",
                    hi: "क्रीम बेकिंग रंग",
                    tr: "Krem pişirme rengi",
                },
                {
                    en: "0.5% firing shrinkage",
                    fa: "انقباض پخت 0.5 درصد",
                    zh: "烧成收缩率0.5%",
                    ru: "Усадка при обжиге 0,5%",
                    hi: "0.5% फायरिंग संकोचन",
                    tr: "0.5% pişirme büzülmesi",
                }
            ],
            uses: [
                {
                    en: "The body of porcelain white ceramic tiles",
                    fa: "بدنه کاشی و سرامیک سفید پخت و پرسلانی",
                    zh: "瓷白陶瓷砖的主体",
                    ru: "Корпус фарфоровых белых керамических плиток",
                    hi: "पोर्सिलेन व्हाइट सिरेमिक टाइल्स का शरीर",
                    tr: "Porselen beyaz seramik karoların gövdesi",
                },
                {
                    en: "Fire brick facade",
                    fa: "آجر نسوز نما",
                    zh: "耐火砖外墙",
                    ru: "Фасад из огнеупорного кирпича",
                    hi: "फायर ब्रिक मुखौटा",
                    tr: "Ateş tuğlası cephe",
                }
            ],
            productCodes: {
                name: {
                    en: "Product code: KG-W",
                    fa: "کد محصول: KG-W3",
                    zh: "产品代码: KG-W",
                    ru: "Код продукта: KG-W",
                    hi: "उत्पाद कोड: KG-W",
                    tr: "Ürün kodu: KG-W",
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
                        hi: "बेकिंग तापमान: 1200 डिग्री",
                        tr: "Pişirme sıcaklığı: 1200 derece",
                    },
                    {
                        en: "Baking color: white",
                        fa: "رنگ پخت: سفید",
                        zh: "烧成颜色: 白色",
                        ru: "Цвет обжига: белый",
                        hi: "बेकिंग रंग: सफेद",
                        tr: "Pişirme rengi: beyaz",
                    },
                    {
                        en: "Product type: bulk lump",
                        fa: "نوع محصول: کلوخ فله",
                        zh: "产品类型: 散装块",
                        ru: "Тип продукта: комовая масса",
                        hi: "उत्पाद प्रकार: थोक गांठ",
                        tr: "Ürün tipi: toplu topak",
                    },
                    {
                        en: "Product lump density: 2kg/cm3",
                        fa: "دانسیته کلوخ محصول: 2kg/cm3",
                        zh: "产品块密度: 2kg/cm3",
                        ru: "Плотность комовой массы: 2 кг/см3",
                        hi: "उत्पाद गांठ घनत्व: 2kg/cm3",
                        tr: "Ürün topak yoğunluğu: 2kg/cm3",
                    }

                ],
                image: '/kg-w-300x155.jpg'
            }
        }
    }
];

export default productConstants;
