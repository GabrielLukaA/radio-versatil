"use client";

import { useEffect, useState } from "react";
import { Back, PlayPause } from "@/components";
import { Front } from "@/components";

export default function Home() {
  const [audio, setAudio] = useState(new Audio("Trop.mp3"));

  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const audio = new Audio("Trop.mp3");
    console.log(1 + 1);
    console.log(audio);
    audio.play();
  }, []);

  const handleTogglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  function pausa() {
    console.log("sadjhkasjdlkasj");
    const waves = document.querySelectorAll(".wave");

    // Adiciona a classe 'paused' a cada elemento
    waves.forEach((wave) => {
      wave.classList.toggle("paused");
    });
  }
  return (
    <div className="w-full h-full flex flex-col gap-8 px-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-white">
          Você está assistindo a{" "}
          <b className="text-[#78FF47]">Rádio Versátil!</b>
        </h1>
        <div className="bg-[#0e0e0e]  border-t-2 border-l-2 border-r-2 rounded-t-2xl border-white pt-12 pb-8 flex flex-col w-full items-center">
          <img src="logo.png" alt="" width={142} height={142} />
          <div className="flex gap-1 w-full h-[88px] items-center justify-center">
            <div className="w-1 h-2 rounded-md bg-white wave"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv2"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv3"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv4"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv5"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv6"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv7"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv8"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv9"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv10"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv11"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv12"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv3"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv4"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv5"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv6"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv7"></div>
            <div className="w-1 h-2 rounded-md bg-white wave wv8"></div>
          </div>
          <div className="flex justify-center gap-5 items-center pt-4">
            <Back color={"#FCFCFC"}></Back>
            <PlayPause
              isPlaying={isPlaying}
              click={(isPaused) => {
                console.log(isPaused)
                pausa()
                // if (!isPaused) {

                //   pausa();
                // } else {
                //  console.log("bah")
                // }
              }}
            ></PlayPause>
            {/* <Back color={"#FCFCFC"}></Back> */}
            <Front color={"#FCFCFC"}></Front>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-white" onClick={() => pausa()}>
          Ouça seu programa favorito
        </h2>
      </div>
    </div>
  );
}
