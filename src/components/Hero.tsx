"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const Hero = () => {
  const text = "¡NOS CASAMOS!";

  return (
    <div className="bg-primary h-screen min-h-screen ">
      <div
        className="max-w-7xl  mx-auto flex items-center flex-col justify-center h-full space-y-4"
        style={{
          backgroundImage: "url('/imgs/hero1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative flex justify-center items-center h-[30px] sm:h-[100px] mt-20">
          <div className="relative">
            {text.split("").map((char, index) => (
              <Fade key={index} direction="up" triggerOnce>
                <span
                  key={index}
                  style={{
                    position: "absolute",
                    transform: `rotate(${
                      index * 5 - (text.length * 5) / 2
                    }deg)`,
                    transformOrigin: "0 200px",
                  }}
                  className="font-helvetica text-sm sm:text-base lg:text-lg   px-0.5 text-tertiary"
                >
                  {char}
                </span>
              </Fade>
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Fade direction="up" triggerOnce>
            <Image
              src="/imgs/hero2.webp"
              alt="Cesar & Veronica"
              className="rounded-t-full z-10 border-[10px] border-[#f0eae0]"
              width={330}
              height={150}
              sizes="(max-width: 768px) 200px, 320px"
            />
          </Fade>
        </div>
        <Fade delay={500} direction="left" triggerOnce>
          <h1 className="text-4xl text-center lg:text-6xl font-birds-of-paradise tracking-wider text-secondary">
            Cesar Huertas
            <br />
            <span className="text-3xl lg:text-5xl"> & </span>
            <br />
            Veronica Gamboa
          </h1>
        </Fade>

        <p className="text-xl text-center lg:text-2xl text-tertiary py-2 font-helvetica rounded-2xl">
          ENE |<span className="text-4xl lg:text-5xl font-bold"> 18 </span> |
          <span className=""> 2025</span> <br />
          <span className="text-2xl lg:text-3xl">4:30 PM</span>
        </p>
      </div>
    </div>
  );
};
