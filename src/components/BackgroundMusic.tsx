"use client";
import { useState } from "react";
import Howl from "react-howler";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-4">
      <button
        onClick={togglePlayPause}
        className="flex items-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isPlaying ? "⏸️ Pausar música" : "▶️ Reproducir música"}
      </button>

      <div className="w-full max-w-lg bg-gray-200 rounded-full overflow-hidden shadow-md">
        <div
          className={`h-2 ${
            isPlaying ? "bg-pink-500" : "bg-gray-400"
          } transition-all duration-300`}
          style={{ width: isPlaying ? "100%" : "0%" }}
        ></div>
      </div>

      {/* Reproductor de audio */}
      <Howl
        src="/music/fondo.mp3"
        playing={isPlaying}
        loop={true}
        volume={0.5}
      />
    </div>
  );
};

export default BackgroundMusic;
