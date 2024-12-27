import Image from "next/image";
import React from "react";

const People = () => {
  return (
    <div className="bg-[#f6f9f4] py-5 px-5 text-center">
      <div className="relative">
        <Image
          src="/imgs/hojas.png"
          alt="hojas decorativas"
          width={700}
          height={200}
          className="mx-auto"
        />
      </div>
      <h2 className="text-4xl font-birds-of-paradise tracking-wider text-[#87907f] mt-2">
        Padres de los Novios
      </h2>
      <div className="mt-10 text-[#545454]">
        <div className="mb-10">
          <h3 className="text-2xl font-semibold">Novio</h3>
          <p className="text-lg mt-2">Cesar Huertas Tunque</p>
          <p className="text-lg">Ceferina Anaya Flores</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Novia</h3>
          <p className="text-lg mt-2">
            Teodoro Augusto Gamboa Ichaccaya (QEPD)
          </p>
          <p className="text-lg">Maura Rivera Guillén</p>
        </div>
      </div>
      <div className="relative ">
        <Image
          src="/imgs/hojas.png"
          alt="hojas decorativas"
          width={700}
          height={200}
          className="mx-auto transform rotate-180 w-ful"
        />
      </div>
    </div>
  );
};

export default People;
