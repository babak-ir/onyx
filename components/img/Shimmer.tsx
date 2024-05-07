import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f3f3" offset="20%" />
      <stop stop-color="#ecebeb" offset="50%" />
      <stop stop-color="#f3f3f3" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f3f3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) => typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);


interface IProp {
    width: number;
    height: number;
    src: string;
    alt?: string;
}


const Shimmer = ({ width, height, src, alt }: IProp = { width: 700, height: 475, src: "/mountains.jpg", alt: "" }) => {
    return (
        <Image
            alt={alt || ''}
            src={src}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            width={width}
            height={height}
            style={{
                maxWidth: "100%",
                height: "auto",
            }}
        />
    );
}

export default Shimmer;