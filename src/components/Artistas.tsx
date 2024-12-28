"use client";
import Image from "next/image";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Artistas = () => {
  return (
    <div className="bg-primary py-10 px-5 text-center  border-b-8 border-tertiary">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-birds-of-paradise text-secondary tracking-wider my-4">
          Orquestas Invitadas
        </h2>
      </Fade>
      <div className="flex flex-col sm:flex-row justify-center gap-10">
        <Fade direction="up" delay={200} triggerOnce cascade damping={0.2}>
          {/* Artista 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/imgs/lucia.jpg"
              alt="Lucia de la Cruz"
              width={300}
              height={300}
              className=" shadow-lg rounded-md"
            />
            <span className="mt-4 text-lg font-medium text-gris">
              Lucia de la Cruz
            </span>
          </div>
          {/* Artista 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/imgs/leontripu.jpg"
              alt="El León y su Tripulación"
              width={300}
              height={300}
              className=" shadow-lg rounded-md"
            />
            <span className="mt-4 text-lg font-medium text-gris">
              El León y su Tripulación
            </span>
          </div>
          {/* Artista sorpresa */}
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-[#a24d61] to-[#f8e7eb] w-[150px] h-[150px] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-semibold">
                ¡Sorpresa!
              </span>
            </div>
            <span className="mt-4 text-lg font-medium text-gris">
              Artista sorpresa
            </span>
          </div>
        </Fade>
      </div>
      <Zoom delay={200} triggerOnce>
        <p className="mt-8 text-lg text-gris">
          ¡Prepárate para una noche inolvidable llena de música y alegría!
        </p>
      </Zoom>
    </div>
  );
};

export default Artistas;
