import Image from "next/image";
import React from "react";

const Vestimenta = () => {
  return (
    <div className="bg-primary py-20 px-5 text-center  border-b-8 border-tertiary">
      <div className="flex justify-center mb-8">
        <Image
          src="/imgs/suit.gif"
          alt="Regalos"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
      </div>
      <h2 className="text-4xl font-birds-of-paradise text-secondary tracking-wider">
        ¡Vestimenta!
      </h2>
      <p className="max-w-2xl mx-auto mt-5 text-lg font-helvetica text-gris">
        Vestimenta formal para los caballeros <br /> Vestido largo para las
        damas
      </p>
    </div>
  );
};

export default Vestimenta;
