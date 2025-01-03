import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Regalos = () => {
  return (
    <div
      className="bg-primary py-20 px-5 text-center border-b-8 border-tertiary"
      style={{
        backgroundImage: "url('/imgs/option5.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
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
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-birds-of-paradise text-secondary tracking-wider">
          ¡Regalos!
        </h2>
      </Fade>
      <Zoom delay={200} triggerOnce>
        <p className="max-w-2xl mx-auto mt-5 text-lg font-helvetica text-gris italic">
          Lo más importante para nosotros es tu presencia en nuestra boda, pero
          si deseas obsequiarnos algo, te dejamos algunas opciones.
        </p>
      </Zoom>
      <Fade direction="left" delay={200} triggerOnce>
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
      </Fade>
    </div>
  );
};

export default Regalos;
