import { Front, Back, PlayPause, Waves } from "@/components";
import { useState } from "react";
export const CurrentMusic = ({ currentMusic, pause, isPlaying, setIsPlaying, setCurrentMusic, musics }) => {

  const img = currentMusic.image
  const audio = currentMusic.audio
//   const [audio, setAudio] = useState(new Audio("Trop.mp3"));

  return (
    <div className="bg-[#0e0e0e]  border-t-2 border-l-2 border-r-2 rounded-t-2xl border-white pt-12 pb-8 flex flex-col w-full items-center">
      <img src={img} alt="" width={142} height={142} />
      <Waves />
      <div className="flex justify-center gap-5 items-center pt-4">
        <Back color={"#FCFCFC"} pause={pause} currentMusic={currentMusic} musics={musics} setCurrentMusic={setCurrentMusic} />
        <PlayPause
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          click={((isPaused) => {
            pause(isPaused, audio)

          })}
        />
        <Front color={"#FCFCFC"} pause={pause} currentMusic={currentMusic} musics={musics} setCurrentMusic={setCurrentMusic} />
      </div>
    </div>
  );
};
