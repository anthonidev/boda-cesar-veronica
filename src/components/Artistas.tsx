"use client";
import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import ReactPlayer from "react-player";

const Artistas = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Asegúrate de que el componente solo se renderice en el cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Renderiza un placeholder mientras verifica si está en el cliente
    return <div></div>;
  }

  return (
    <div className="bg-primary py-10 px-5 text-center border-b-8 border-tertiary">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-birds-of-paradise text-secondary tracking-wider my-4">
          Orquestas Invitadas
        </h2>
      </Fade>
      <div className="flex flex-col sm:flex-row justify-center gap-10">
        <Fade direction="up" delay={200} triggerOnce cascade damping={0.2}>
          {/* Artista 1 */}
          <div className="flex flex-col items-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=2oOYvni83Mg"
              width="300px"
              height="200px"
              controls={true}
              className="shadow-lg rounded-md"
            />
            <span className="mt-4 text-lg font-medium text-gris">
              Lucia de la Cruz
            </span>
          </div>
          {/* Artista 2 */}
          <div className="flex flex-col items-center">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=TrnHxdu3sHU"
              width="300px"
              height="200px"
              controls={true}
              className="shadow-lg rounded-md"
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
