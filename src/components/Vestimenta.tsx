"use client";
import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Vestimenta = () => {
  return (
    <div
      className=" py-32 px-5 text-center  border-b-8 border-tertiary"
      style={{
        backgroundImage: "url('/imgs/fondo.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex justify-center mb-8">
        <Image
          src="/imgs/suit.gif"
          alt="Regalos"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />
      </div>
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-birds-of-paradise text-secondary tracking-wider">
          ¡Vestimenta!
        </h2>
      </Fade>
      <Zoom delay={200} triggerOnce>
        <p className="max-w-2xl mx-auto mt-5 text-lg font-helvetica text-gris bg-white/80 italic rounded-lg">
          Vestimenta formal para los caballeros <br /> Vestido largo para las
          damas
        </p>
      </Zoom>
    </div>
  );
};

export default Vestimenta;
