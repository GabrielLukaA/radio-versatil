"use client";

import { useEffect, useState } from "react";
import { Back, PlayPause } from "@/components";
import { Front } from "@/components";
import { Waves } from "@/components";
import { CurrentMusic } from "@/components/CurrentMusic";
export default function Home() {
  const [audio, setAudio] = useState(new Audio("Trop.mp3"));

  const [isPlaying, setIsPlaying] = useState(false);

  const blocks = [
    {
      name: "Trop",
      visible: true,
      image: "logo.png",
      principal: true,
      audio: new Audio("Trop.mp3"),
    },
    {
      name: "Rosa e o Beija Flor",
      visible: true,
      image: "vercel.svg",
      principal: false,
      audio: new Audio("RosaBeijaFlor.mp3"),
    },
    {
      name: "Eu, você, o mar e ela",
      visible: true,
      image: "next.svg",
      principal: false,
      audio: new Audio("EuMarEla.mp3"),
    },
    {
      name: "Trop",
      visible: true,
      image: "logo.png",
      principal: false,
      audio: new Audio("Trop.mp3"),
    },
    {
      name: "Rosa e o Beija Flor",
      visible: true,
      image: "vercel.svg",
      principal: false,
      audio: new Audio("RosaBeijaFlor.mp3"),
    },
    {
      name: "Eu, você, o mar e ela",
      visible: false,
      image: "next.svg",
      principal: false,
      audio: new Audio("EuMarEla.mp3"),
    },
    {
      name: "Chuva de arroz",
      visible: false,
      image: "next.svg",
      principal: false,
      audio: new Audio("ChuvaArroz.mp3"),
    },
    {
      name: "Rosa e o Beija Flor",
      visible: true,
      image: "vercel.svg",
      principal: false,
      audio: new Audio("RosaBeijaFlor.mp3"),
    },
    {
      name: "Eu, você, o mar e ela",
      visible: true,
      image: "next.svg",
      principal: false,
      audio: new Audio("EuMarEla.mp3"),
    },
    {
      name: "Trop",
      visible: true,
      image: "logo.png",
      principal: false,
      audio: new Audio("Trop.mp3"),
    },
    {
      name: "Rosa e o Beija Flor",
      visible: true,
      image: "vercel.svg",
      principal: false,
      audio: new Audio("RosaBeijaFlor.mp3"),
    },
    {
      name: "Eu, você, o mar e ela",
      visible: false,
      image: "next.svg",
      principal: false,
      audio: new Audio("EuMarEla.mp3"),
    },
    {
      name: "Rosa e o Beija Flor",
      visible: true,
      image: "vercel.svg",
      principal: false,
      audio: new Audio("RosaBeijaFlor.mp3"),
    },
  ];

  async function handleTogglePlayPause() {
    setIsPlaying((prevState) => !prevState);
  }

  console.log(blocks.length);
  const [currentMusic, setCurrentMusic] = useState(blocks[0]);

  function pause(isPaused, audio, isNew) {
    if (isNew) {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
      setIsPlaying(false);
    }

    console.log(isPaused);
    if (!isPaused) {
      audio.play();
    } else {
      audio.pause();
    }

  const waves = document.querySelectorAll(".wave");

  // Adiciona a classe 'paused' a cada elemento
  if (isNew){
    waves.forEach((wave) => {
      wave.classList.add("paused");
    });
  } else {
    waves.forEach((wave) => {
      wave.classList.toggle("paused");
    });
  }

}
   


  function pausa() {
    console.log("sadjhkasjdlkasj");
    const waves = document.querySelectorAll(".wave");

    // Adiciona a classe 'paused' a cada elemento
    waves.forEach((wave) => {
      wave.classList.toggle("paused");
    });
  }
  return (
    <div className="w-screen h-screen flex flex-col gap-8 px-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-white">
          Você está assistindo a{" "}
          <b
            className="text-[#78FF47]"
            onClick={() => {
              setCurrentMusic(blocks[1]);
              pause(true, currentMusic.audio, true);
            }}
          >
            Rádio Versátil!
          </b>
        </h1>
        <CurrentMusic
          isPlaying={isPlaying}
          setCurrentMusic={setCurrentMusic}
          musics={blocks}
          setIsPlaying={handleTogglePlayPause}
          pause={pause}
          currentMusic={currentMusic}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-white" onClick={() => pausa()}>
          Ouça seu programa favorito
        </h2>
        <div className="flex overflow-auto gap-6 w-full ">


        {blocks.map((block) => {
          if (block.visible && !block.principal) {
            return (
              <div>
                <p className="min-w-[30%] w-[30%] whitespace-nowrap"
                  onClick={() => {
                    setCurrentMusic(block);
                    pause(true, currentMusic.audio, true);
                  }}
                >
                  {block.name}
                </p>
              </div>
            );
          }
        })}
                </div>
      </div>
    </div>
  );
}
