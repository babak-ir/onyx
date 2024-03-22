import kaolinite from '../../../../public/kaolinite.png';
import unmatched from '../../../../public/unmatched.png';
import { IProduct } from '../interfaces/productInterfaces';

const productConstants: IProduct[] = [
    {
        id: 1,
        title: "Unmatched Quality Assurance",
        disc: "Ideal for a wide array of industrial applications, our standard micronized kaolinite boasts unparalleled purity and consistency. From ceramics to plastics, it serves as the cornerstone for achieving exceptional results in your manufacturing processes.",
        image: unmatched
    },
    {
        id: 2,
        title: "Specialty Micronized Kaolinite",
        disc: "Tailored to meet the unique demands of specialized industries, our specialty micronized kaolinite offers enhanced properties to optimize performance in niche applications. Whether you require precise particle size distribution or specific surface modifications, we deliver solutions that exceed expectations.",
        image: kaolinite
    }
];

export default productConstants;