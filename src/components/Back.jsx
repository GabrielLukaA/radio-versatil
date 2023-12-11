export const Back = ({color,setCurrentMusic,musics,currentMusic,pause}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      onClick={() => {
        pause(true, currentMusic.audio, true);
        let bah = musics.find((music) => {
          return music.name == currentMusic.name;
        });
        console.log(bah);
        let index = musics.indexOf(bah) - 1
        if ( index<0){
index = musics.length -1
        }
        console.log(index)
        setCurrentMusic(musics[index]);
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 19.794L7 14.598C5 13.443 5 10.557 7 9.402L16 4.206C18 3.051 20.5 4.494 20.5 6.804V17.196C20.5 19.506 18 20.949 16 19.794ZM3.5 19C3.5 19.2652 3.60536 19.5196 3.79289 19.7071C3.98043 19.8946 4.23478 20 4.5 20C4.76522 20 5.01957 19.8946 5.20711 19.7071C5.39464 19.5196 5.5 19.2652 5.5 19V5C5.5 4.73478 5.39464 4.48043 5.20711 4.29289C5.01957 4.10536 4.76522 4 4.5 4C4.23478 4 3.98043 4.10536 3.79289 4.29289C3.60536 4.48043 3.5 4.73478 3.5 5V19Z"
        fill={color}
      />
    </svg>
  );
};
