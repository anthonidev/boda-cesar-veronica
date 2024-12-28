"use client";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const People = () => {
  return (
    <div className="bg-primary  border-b-8 border-tertiary">
      <div
        className=" py-40 lg:py-20 max-w-7xl mx-auto px-5 text-center"
        style={{
          backgroundImage: "url('/imgs/option5.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto p-9  bg-opacity-80 rounded-lg">
          <Fade direction="left" delay={200} triggerOnce>
            <h2 className="text-4xl font-birds-of-paradise tracking-wider text-gris mt-5">
              Padres de los Novios
            </h2>
            <div className="mt-5 text-[#545454] italic">
              <div className="mb-10">
                <Zoom delay={300} cascade damping={0.2}>
                  <h3 className="text-2xl font-semibold">Novio</h3>
                  <p className="text-lg mt-2">Cesar Huertas Tunque</p>
                  <p className="text-lg">Ceferina Anaya Flores</p>
                </Zoom>
              </div>
              <div>
                <Zoom delay={300} cascade damping={0.2}>
                  <h3 className="text-2xl font-semibold">Novia</h3>
                  <p className=" mt-2">
                    Teodoro Augusto Gamboa Ichaccaya (QEPD)
                  </p>
                  <p className="">Maura Rivera Guillén</p>
                </Zoom>
              </div>
            </div>
          </Fade>
          <Fade direction="right" delay={200} triggerOnce>
            <h2 className="text-4xl font-birds-of-paradise tracking-wider text-gris mt-5 ">
              Padrinos
            </h2>

            <div className="mt-5 text-[#545454] italic">
              <div className="mb-10">
                <Zoom delay={300} cascade damping={0.2}>
                  <p className=" mt-2  ">Jacqueline Fiorella Gamboa Rivera</p>
                  <p className="capitalize">Benji Ali Llanos Quispe</p>
                </Zoom>
              </div>
            </div>
          </Fade>
          <Fade direction="right" delay={200} triggerOnce>
            <h2 className="text-4xl font-birds-of-paradise tracking-wider text-gris mt-5 ">
              Testigos
            </h2>

            <div className="mt-5 text-[#545454] italic">
              <div className="mb-10">
                <Zoom delay={300} cascade damping={0.2}>
                  <p className=" mt-2 ">Hermogenes García Hurtado</p>
                  <p className="">Virginia Yraida Salinas Rodriguez</p>
                </Zoom>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default People;
