import { useState } from "react";

const AudioButton = ({ name, playAudio, stopAudio, audioLength }) => {
  const [timer, setTimer] = useState();

  const loopAudio = () => {
    playAudio();
    setTimer(setTimeout(loopAudio, audioLength));
  };

  return (
    <button
      onMouseDown={() => {
        loopAudio();
      }}
      onMouseUp={() => {
        stopAudio();
        clearTimeout(timer);
      }}
      onMouseLeave={() => {
        stopAudio();
        clearTimeout(timer);
      }}
    >
      {name}
    </button>
  );
};

export default AudioButton;
