import { useState } from "react";
import Indietro from "./Indietro";
import Text from "./Text";

function Eggs() {
  const [uovo, setUovo] = useState("/uovo_piccolo.jpg");
  const [gallina, setGallina] = useState(
    "https://www.babalibri.it/wp-content/uploads/2017/02/uovo4-2048x2048.jpg"
  );
  const [showSexton, setShowSexton] = useState(false);
  const [showT, setShowT] = useState(true);

  const handleUovo = (evt) => {
    evt.preventDefault();
    if (uovo === "/uovo_piccolo.jpg") {
      setUovo("/uovo_dati.jpg");
    } else if (uovo === "/uovo_dati.jpg") {
      setUovo("/uovo_piccolo.jpg");
    }
  };

  const handleGallina = (evt) => {
    evt.preventDefault();
    if (
      gallina ===
      "https://www.babalibri.it/wp-content/uploads/2017/02/uovo4-2048x2048.jpg"
    ) {
      setGallina(
        "https://www.babalibri.it/wp-content/uploads/2017/03/Uovo-e-gallina.jpg"
      );
    } else if (
      gallina ===
      "https://www.babalibri.it/wp-content/uploads/2017/03/Uovo-e-gallina.jpg"
    ) {
      setGallina(
        "https://www.babalibri.it/wp-content/uploads/2017/02/uovo4-2048x2048.jpg"
      );
    }
  };

  const handleSexton = (evt) => {
    evt.preventDefault();
    console.log(evt);
    setShowT(!showT);
    setShowSexton(!showSexton);
  };

  return (
    <section id="eggsbody">
      <Indietro />
      <section className="eggspertre">
        <Text
          showT={showT}
          handleSexton={handleSexton}
          showSexton={showSexton}
        />
        <section id="eggs">
          <div className="little" id="cursor"></div>
          <img
            className="egg"
            src={uovo}
            alt="Piccolo uovo"
            onClick={handleUovo}
          />
          <img
            className="little"
            src="https://4.bp.blogspot.com/-0oybcA16Sx8/WjeOkkxoq0I/AAAAAAAAGDw/t4L5G6JfCsYDgACTG0g7n6O67x19NStvQCLcBGAs/s400/IMG_5262.jpg"
            alt="uccellino e nido con due cuccioli, dal sito di Liuna Virardi"
          />
          <a
            href="https://brittateckentrup.com/egg.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="little"
              src="https://brittateckentrup.com/egg/egg48.jpg"
              alt="Das Ei, copertina, dal sito dell'autrice"
            />
          </a>
          <div className="big" onClick={handleSexton}></div>
          <img
            className="egg"
            src={gallina}
            alt="gallina con pulcino, particolare di L'uovo e la gallina, dal sito dell'editore Babalibri"
            onClick={handleGallina}
          />
          <img
            className="little"
            src="/vogel.jpg"
            alt="particolare di Der Tag, an dem ich en Vogel wurde(foto mia)"
          />
        </section>
      </section>
      <div id="letsgo">
        <p>
          <b>Thanks to</b>
          <br />
          good ideas, poets, writers, illustrators, publishers, web developers,
          best friends, friends who live abroad, who is in this website without
          knowing it and who knows it, people who organize events, people who
          share positive energy, the city of Bologna, the city of Berlin, my
          daughter
        </p>
        <img id="heart" src="/heart.jpg" alt="cuore" />
        <a
          href="https://bolognachildrensbookfair.com/en/home/878.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="logoBCBF"
            src="https://bolognachildrensbookfair.com/nqcontent/images/bcbf/logoBCBF60_Header.svg"
            alt="logo BCBF"
          />
          LET'S GO!
        </a>
        <img id="heart" src="/heart.jpg" alt="cuore" />
      </div>
    </section>
  );
}

export default Eggs;
