import { StaticImageData } from "next/image";

export interface IProduct {
    id: number;
    title: string;
    disc: string;
    image: StaticImageData;
}