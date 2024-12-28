import React from "react";

const People = () => {
  return (
    <div className="bg-primary">
      <div
        className=" py-20 max-w-7xl mx-auto px-5 text-center"
        style={{
          backgroundImage: "url('/imgs/fondo4.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto p-9  bg-opacity-80 rounded-lg">
          <h2 className="text-4xl font-birds-of-paradise tracking-wider text-gris mt-5">
            Padres de los Novios
          </h2>
          <div className="mt-5 text-[#545454]">
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

          <h2 className="text-4xl font-birds-of-paradise tracking-wider text-gris mt-5">
            Testigos
          </h2>
          <div className="mt-5 text-[#545454]">
            <div className="mb-10">
              <p className="text-lg mt-2">Hermogenes García Hurtado</p>
              <p className="text-lg">Virginia Yrauda Salinas Rodriguez</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
