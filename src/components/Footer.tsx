import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-primary  pt-6"
      style={{
        backgroundImage: "url('/imgs/unique.webp')",

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center py-20 bg-white/10">
        <p className="text-lg font-light mb-2 font-helvetica text-tertiary">
          Con Amor
        </p>
        <h2 className="text-5xl font-birds-of-paradise text-secondary  mb-2">
          Cesar & Veronica
        </h2>
      </div>
      <div className="bg-pink-600 w-full text-center py-2 bg-opacity-80">
        <p className="text-xs text-gray-100">
          Creado por{" "}
          <Link
            href="https://www.instagram.com/agencia.belmont?igsh=eXNjazVrZ2gzaG5v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold underline"
          >
            Agencia Belmont{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
