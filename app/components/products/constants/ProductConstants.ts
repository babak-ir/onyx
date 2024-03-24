import kaolinite from "../../../../public/kaolinite.png";
import unmatched from "../../../../public/unmatched.png";
import kgR from "../../../../public/kg-r-300x142.jpg";
import kgW from "../../../../public/kg-w-300x155.jpg";

import { IProduct } from "../interfaces/productInterfaces";

const productConstants: IProduct[] = [
    {
        id: 1,
        title: "Unmatched Quality Assurance",
        disc: "Ideal for a wide array of industrial applications, our standard micronized kaolinite boasts unparalleled purity and consistency. From ceramics to plastics, it serves as the cornerstone for achieving exceptional results in your manufacturing processes.",
        image: unmatched,
        detailes: {
            analyze: { "SiO2": "76", "Al2O3": "14.7", "Fe2O3": "0.7", "Cao": "0.6", "K2O": "2.9", "Na2O": "0.14", "Mgo": "0.1", "Bao": "-", "P2O5": "0", "SO3": "-", "TiO2": "0.05", "L.O.I": "4.8" },
            attributes: [
                "Baking temperature 1100 degrees Celsius",
                "Dry flexural strength (MOR): 220 kg/cm",
                "Cream baking color",
                "0.5% firing shrinkage"
            ],
            uses: [
                "The body of porcelain white ceramic tiles",
                "Fire brick facade"
            ],
            productCodes: [{
                name: "Product code: KG-R",
                code: "KG-R",
                chemical: { "SiO2": "68.3", "Al2O3": "17.5", "Fe2O3": "1.6", "Cao": "1.3", "K2O": "2.4", "Na2O": "2.7", "Mgo": "0.9", "Bao": "0", "P2O5": "0", "SO3": "0", "TiO2": "0.4", "L.O.I": "4.9" },
                physical: [
                    "Baking temperature 1050 degrees",
                    "Red baking color",
                    "The shape of the product is a soft lump with a cooking shrinkage of 0.5%"
                ],
                image: kgR
            }, {
                name: "Product code: KG-W",
                code: "KG-W",
                chemical: { "SiO2": "68.3", "Al2O3": "17.5", "Fe2O3": "1.6", "Cao": "1.3", "K2O": "2.4", "Na2O": "2.7", "Mgo": "0.9", "Bao": "0", "P2O5": "0", "SO3": "0", "TiO2": "0.4", "L.O.I": "4.9" },
                physical: [
                    "Baking temperature 1050 degrees",
                    "Red baking color",
                    "The shape of the product is a soft lump with a cooking shrinkage of 0.5%"
                ],
                image: kgW
            }]
        }
    },
    {
        id: 2,
        title: "Specialty Micronized Kaolinite",
        disc: "Tailored to meet the unique demands of specialized industries, our specialty micronized kaolinite offers enhanced properties to optimize performance in niche applications. Whether you require precise particle size distribution or specific surface modifications, we deliver solutions that exceed expectations.",
        image: kaolinite,
        detailes: {
            analyze: { "SiO2": "76", "Al2O3": "14.7", "Fe2O3": "0.7", "Cao": "0.6", "K2O": "2.9", "Na2O": "0.14", "Mgo": "0.1", "Bao": "-", "P2O5": "0", "SO3": "-", "TiO2": "0.05", "L.O.I": "4.8" },
            attributes: [
                "Baking temperature 1100 degrees Celsius",
                "Dry flexural strength (MOR): 220 kg/cm",
                "Cream baking color",
                "0.5% firing shrinkage"
            ],
            uses: [
                "The body of porcelain white ceramic tiles",
                "Fire brick facade"
            ],
            productCodes: [{
                name: "Product code: KG-R",
                code: "KG-R",
                chemical: { "SiO2": "68.3", "Al2O3": "17.5", "Fe2O3": "1.6", "Cao": "1.3", "K2O": "2.4", "Na2O": "2.7", "Mgo": "0.9", "Bao": "0", "P2O5": "0", "SO3": "0", "TiO2": "0.4", "L.O.I": "4.9" },
                physical: [
                    "Baking temperature 1050 degrees",
                    "Red baking color",
                    "The shape of the product is a soft lump with a cooking shrinkage of 0.5%"
                ],
                image: kgR
            }, {
                name: "Product code: KG-W",
                code: "KG-W",
                chemical: { "SiO2": "68.3", "Al2O3": "17.5", "Fe2O3": "1.6", "Cao": "1.3", "K2O": "2.4", "Na2O": "2.7", "Mgo": "0.9", "Bao": "0", "P2O5": "0", "SO3": "0", "TiO2": "0.4", "L.O.I": "4.9" },
                physical: [
                    "Baking temperature 1050 degrees",
                    "Red baking color",
                    "The shape of the product is a soft lump with a cooking shrinkage of 0.5%"
                ],
                image: kgW
            }]
        }
    }
];

export default productConstants;