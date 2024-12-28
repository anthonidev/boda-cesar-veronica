import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  onClick: () => void;
};

const CardGaleria = ({ alt, src, onClick }: Props) => {
  return (
    <div
      className="flex items-center justify-center h-full w-full overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className="rounded-lg shadow-lg object-cover"
      />
    </div>
  );
};

export default CardGaleria;
