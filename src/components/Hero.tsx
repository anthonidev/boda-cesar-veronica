import Image from "next/image";
import React from "react";

export const Hero = () => {
  const text = " ¡NOS CASAMOS!";

  return (
    <div className="bg-[#f6f9f4] relative min-h-screen flex-col items-center flex h-full justify-center">
      <Image
        src="/imgs/flores_esquina_izquierda.png"
        alt="Cesar & Veronica"
        className="absolute top-0 left-0 z-0"
        width={200}
        height={200}
      />
      <div className="border-[#f0eae0] border-[10px]">
        <div className="max-w-7xl lg:mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20 text-center flex flex-col justify-center border-[#baa78d] border-2 bg-white space-y-4">
          <div className="relative flex justify-center items-center h-[60px]">
            <div className="relative">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  style={{
                    position: "absolute",
                    transform: `rotate(${
                      index * 5 - (text.length * 5) / 2
                    }deg)`,
                    transformOrigin: "0 200px",
                  }}
                  className=" font-helvetica text-sm text-[#99837c] "
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center flex-col items-center">
            <Image
              src="/imgs/hero.jpg"
              alt="Cesar & Veronica"
              className="rounded-t-full z-10 border-[10px] border-[#f0eae0]"
              width={240}
              height={100}
            />
          </div>
          <h1 className="text-4xl font-birds-of-paradise  tracking-wider text-[#99837c]">
            Cesar Huertas
            <br />
            <span className="text-3xl "> & </span>
            <br />
            Veronica Gamboa
          </h1>
          <p className="text-xl  text-[#99837c]  py-2 font-helvetica rounded-2xl">
            ENE |<span className="text-4xl font-bold"> 18 </span> |
            <span className=""> 2025</span>
          </p>
        </div>
      </div>

      <Image
        src="/imgs/flores_esquina_izquierda.png"
        alt="Cesar & Veronica"
        width={200}
        className="absolute bottom-0 right-0 z-0 rotate-180"
        height={200}
      />
    </div>
  );
};
