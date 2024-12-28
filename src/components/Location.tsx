"use client";
import { CalendarIcon, LocationIcon } from "@/assets/Icons";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const Location = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-18T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-primary text-center py-16 px-4 sm:py-20  border-b-8 border-tertiary"
      style={{
        backgroundImage: "url('/imgs/fondo2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl sm:text-5xl font-birds-of-paradise tracking-wider text-secondary mb-6">
          ¡Estás Invitado!
        </h2>
      </Fade>
      <Fade direction="up" delay={200} triggerOnce>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl italic mt-2 font-helvetica px-5 text-gris">
          Nos encantaría que nos acompañes en este día tan especial para
          nosotros.
        </p>
      </Fade>

      {/* Cuenta regresiva */}
      <div className="max-w-4xl mx-auto mt-10">
        <Fade direction="up" triggerOnce>
          <h3 className="text-3xl font-birds-of-paradise tracking-wider text-tertiary mb-4">
            Cuenta regresiva
          </h3>
        </Fade>

        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>
            {["Días", "Horas", "Min", "Seg"].map((label, index) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center border border-tertiary rounded-lg p-4 bg-white/80 shadow-md"
              >
                <p className="text-3xl sm:text-4xl font-bold text-tertiary">
                  {Object.values(timeRemaining)[index]}
                </p>
                <span className="text-sm sm:text-base text-tertiary">
                  {label}
                </span>
              </div>
            ))}
          </Fade>
        </div>
      </div>

      {/* Información del evento */}
      <div className="max-w-4xl mx-auto mt-16">
        <Fade direction="left" delay={200}>
          <div className="py-8 border-t border-secondary">
            <h3 className="text-2xl font-birds-of-paradise tracking-wider text-secondary">
              Lugar
            </h3>
            <p className="text-lg sm:text-xl font-helvetica text-gris mt-2">
              Casa Pretelli - Lurín
            </p>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/Casa+Pretelli/@-12.2421512,-76.8786163,17z/data=!3m1!4b1!4m6!3m5!1s0x9105bc4e8339dd3b:0xe7c1f2c1bc943ea7!8m2!3d-12.2421512!4d-76.8786163!16s%2Fg%2F11bw82dkgt?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              className="text-[#f6f9f4] text-sm sm:text-base bg-[#a67d5c] px-4 py-2 rounded-md inline-block mt-3 hover:bg-tertiary transition-colors"
            >
              <LocationIcon className="w-5 h-5 inline-block mr-2 " />
              Ver ubicación
            </Link>
          </div>
        </Fade>
        <Fade direction="right" delay={200}>
          <div className="py-8 border-y border-secondary">
            <h3 className="text-2xl font-birds-of-paradise tracking-wider text-secondary">
              Fecha
            </h3>
            <p className="text-lg sm:text-xl font-helvetica text-gris mt-2">
              Enero 18, 2025
            </p>
            <p>
              <span className="text-lg sm:text-xl font-helvetica text-gris mt-2">
                4:30 PM
              </span>
            </p>
            <Link
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Cesar+y+Veronica&dates=20250118T000000Z/20250118T235900Z&details=Nos+encantaría+que+nos+acompañes+en+este+día+tan+especial.&location=Casa+Pretelli,+Lurin&sf=true&output=xml"
              target="_blank"
              rel="noreferrer"
              className="text-[#f6f9f4] text-sm sm:text-base bg-[#a67d5c] px-4 py-2 rounded-md inline-block mt-3 hover:bg-tertiary transition-colors"
            >
              <CalendarIcon className="w-5 h-5 inline-block mr-2 " />
              Agendar en calendario
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Location;
