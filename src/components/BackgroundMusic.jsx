"use client";
import { useEffect, useRef, useState } from "react";

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);
  const [status, setStatus] = useState("stopped"); // "playing", "paused", "stopped"

  useEffect(() => {
    if (status === "playing") {
      audioRef.current.play();
    } else if (status === "paused") {
      audioRef.current.pause();
    } else if (status === "stopped") {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
    }
  }, [status]);

  const toggleMusic = () => {
    if (status === "playing") {
      setStatus("paused");
    } else {
      setStatus("playing");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-lg flex items-center">
      <button
        onClick={toggleMusic}
        className="p-3 bg-[#983532] text-white rounded-full text-lg"
      >
        {status === "playing" ? "⏸️ Pause" : "▶️ Play"}
      </button>
      <audio ref={audioRef} loop>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
