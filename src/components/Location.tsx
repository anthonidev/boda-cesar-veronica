"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
    <div className="bg-[#f6f9f4] text-center py-20">
      <h2 className="text-4xl font-birds-of-paradise tracking-wider text-[#87907f] text-center">
        ¡Estás Invitado!
      </h2>
      <p className="max-w-4xl mx-auto text-xl mt-4 font-helvetica px-5 text-[#545454]">
        Nos encantaría que nos acompañes en este día tan especial para nosotros.
      </p>

      <div className="max-w-4xl mx-auto mt-5">
        <h3 className="text-2xl font-birds-of-paradise tracking-wider text-[#87907f]">
          Cuenta regresiva
        </h3>
        <div className="flex justify-center mt-4 space-x-5">
          <div className="text-center border p-1 rounded-lg">
            <p className="text-4xl font-bold text-[#545454] ">
              {timeRemaining.days}
            </p>
            <span className="text-sm text-[#87907f]">Días</span>
          </div>
          <div className="text-center border p-1 rounded-lg">
            <p className="text-4xl font-bold text-[#545454]">
              {timeRemaining.hours}
            </p>
            <span className="text-sm text-[#87907f]">Horas</span>
          </div>
          <div className="text-center border p-1 rounded-lg">
            <p className="text-4xl font-bold text-[#545454]">
              {timeRemaining.minutes}
            </p>
            <span className="text-sm text-[#87907f]">Min</span>
          </div>
          <div className="text-center border p-1 rounded-lg">
            <p className="text-4xl font-bold text-[#545454]">
              {timeRemaining.seconds}
            </p>
            <span className="text-sm text-[#87907f]">Seg</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <div className="py-4">
          <h3 className="text-2xl font-birds-of-paradise tracking-wider text-[#87907f]">
            Lugar
          </h3>
          <p className="text-xl font-helvetica text-[#545454]">
            Casa Pretelli - Lurin
          </p>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Casa+Pretelli/@-12.2421512,-76.8786163,17z/data=!3m1!4b1!4m6!3m5!1s0x9105bc4e8339dd3b:0xe7c1f2c1bc943ea7!8m2!3d-12.2421512!4d-76.8786163!16s%2Fg%2F11bw82dkgt?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            className="text-[#f2f5ea] text-sm bg-[#87907f] px-3 py-1 rounded-md inline-block"
          >
            Ver ubicación
          </Link>
        </div>
        <div className="py-4">
          <h3 className="text-2xl font-birds-of-paradise tracking-wider text-[#87907f]">
            Fecha
          </h3>
          <p className="text-xl font-helvetica text-[#545454]">
            Enero 18, 2025
          </p>
          <Link
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Cesar+y+Veronica&dates=20250118T000000Z/20250118T235900Z&details=Nos+encantaría+que+nos+acompañes+en+este+día+tan+especial.&location=Casa+Pretelli,+Lurin&sf=true&output=xml"
            target="_blank"
            rel="noreferrer"
            className="text-[#f2f5ea] text-sm bg-[#87907f] px-3 py-1 rounded-md inline-block"
          >
            Agendar en calendario
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;
