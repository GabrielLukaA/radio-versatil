"use client";
import { useState } from "react";
export const PlayPause = ({click, isPlaying, setIsPlaying}) => {
  const [isPaused, setIsPaused] = useState(true);


  return isPlaying ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
     onClick={async()=>{
        await setIsPlaying()
        click(isPlaying)
 
     }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H8C8.79565 4 9.55871 4.31607 10.1213 4.87868C10.6839 5.44129 11 6.20435 11 7V17C11 17.7956 10.6839 18.5587 10.1213 19.1213C9.55871 19.6839 8.79565 20 8 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7ZM16 4C15.2044 4 14.4413 4.31607 13.8787 4.87868C13.3161 5.44129 13 6.20435 13 7V17C13 17.7956 13.3161 18.5587 13.8787 19.1213C14.4413 19.6839 15.2044 20 16 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4H16Z"
        fill="#FF627E"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={async()=>{
       await setIsPlaying()
       click(isPlaying)

    }}
      
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 14.598C21.5 13.443 21.5 10.557 19.5 9.402L10.5 4.206C8.5 3.05 6 4.494 6 6.804V17.196C6 19.506 8.5 20.949 10.5 19.794L19.5 14.598Z"
        fill="#78FF47"
      />
    </svg>
  );
};
