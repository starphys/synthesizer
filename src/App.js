import "./App.css";
import useSound from "use-sound";

import gotitem from "./assets/gotitem.mp3";
import arrow from "./assets/arrow.mp3";
import background from "./assets/background music.mp3";
import kangaroo from "./assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";
import missile from "./assets/missile.mp3";
import pop from "./assets/pop.mp3";
import soundtrack from "./assets/soundtrack.mp3";
import theme from "./assets/theme_01.mp3";
import zombie from "./assets/Zombie.mp3";

import Header from "./components/Header";
import AudioButton from "./components/AudioButton";

function App() {
  //Eventually the data may flow into app from a different source, this is good enough for now
  const [play1, data1] = useSound(gotitem);
  const [play2, data2] = useSound(arrow);
  const [play3, data3] = useSound(background);
  const [play4, data4] = useSound(kangaroo);
  const [play5, data5] = useSound(missile);
  const [play6, data6] = useSound(pop);
  const [play7, data7] = useSound(soundtrack);
  const [play8, data8] = useSound(theme);
  const [play9, data9] = useSound(zombie);

  return (
    //Will want a component for organizing and displaying buttons, but for now this will do
    <div className="body">
      <Header />
      <div className="grid">
        <AudioButton
          name="Got It"
          playAudio={play1}
          stopAudio={data1.stop}
          audioLength={data1.duration}
        />
        <AudioButton
          name="Arrow"
          playAudio={play2}
          stopAudio={data2.stop}
          audioLength={data2.duration}
        />
        <AudioButton
          name="Intense"
          playAudio={play3}
          stopAudio={data3.stop}
          audioLength={data3.duration}
        />
        <AudioButton
          name="Boom boom bah"
          playAudio={play4}
          stopAudio={data4.stop}
          audioLength={data4.duration}
        />
        <AudioButton
          name="Missile"
          playAudio={play5}
          stopAudio={data5.stop}
          audioLength={data5.duration}
        />
        <AudioButton
          name="Pop"
          playAudio={play6}
          stopAudio={data6.stop}
          audioLength={data6.duration}
        />
        <AudioButton
          name="Soundtrack"
          playAudio={play7}
          stopAudio={data7.stop}
          audioLength={data7.duration}
        />
        <AudioButton
          name="Theme"
          playAudio={play8}
          stopAudio={data8.stop}
          audioLength={data8.duration}
        />
        <AudioButton
          name="Groan"
          playAudio={play9}
          stopAudio={data9.stop}
          audioLength={data9.duration}
        />
      </div>
    </div>
  );
}

export default App;
