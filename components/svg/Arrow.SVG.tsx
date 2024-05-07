interface IProp {
    width: number;
    height: number;
}

const ArrowSVG = ({ width, height }: IProp = { width: 64, height: 64 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12.59L10.59 2H4V0H14V10H12V3.41L1.41 14L0 12.59Z" fill="white" />
        </svg>
    );
}

export default ArrowSVG;