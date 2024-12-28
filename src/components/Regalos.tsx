import Image from "next/image";
import Link from "next/link";
import React from "react";

const Regalos = () => {
  return (
    <div
      className="bg-primary py-20 px-5 text-center border-b-8 border-tertiary"
      // style={{
      //   backgroundImage: "url('/imgs/fondo2.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex justify-center mb-8">
        <Image
          src="/imgs/gift.gif"
          alt="Regalos"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
      </div>
      <h2 className="text-4xl font-birds-of-paradise text-secondary tracking-wider">
        ¡Regalos!
      </h2>
      <p className="max-w-2xl mx-auto mt-5 text-lg font-helvetica text-gris">
        Lo más importante para nosotros es tu presencia en nuestra boda, pero si
        deseas obsequiarnos algo, te dejamos algunas opciones.
      </p>
      <div className="mt-8">
        <Link
          href="https://regalos.noviosabordo.com/CesaryVeronica"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg bg-[#a67d5c] px-6 py-2 rounded-lg hover:bg-tertiary transition duration-300"
        >
          Ver lista de regalos
        </Link>
      </div>
    </div>
  );
};

export default Regalos;
