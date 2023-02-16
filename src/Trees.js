import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Indietro from "./Indietro";

function Trees() {
  const [aranciocard, setAranciocard] = useState(
    "https://freight.cargo.site/w/990/q/75/i/bd7bd053cc33e536124151a09405a5c2d17aaac23c492f92984bc3b5ce7fb2e5/cover_arancio2-copia.jpg"
  );
  const [animalcard, setAnimalcard] = useState(
    "https://www.arsedition.de/pondus/arsEdition/product/product-10253.png"
  );

  const handleArancio = (evt) => {
    evt.preventDefault();
    if (
      aranciocard ===
      "https://freight.cargo.site/w/990/q/75/i/bd7bd053cc33e536124151a09405a5c2d17aaac23c492f92984bc3b5ce7fb2e5/cover_arancio2-copia.jpg"
    ) {
      setAranciocard(
        "https://www.babalibri.it/wp-content/uploads/2017/03/la-mia-valle-1133x1536.jpg"
      );
    } else if (
      aranciocard ===
      "https://www.babalibri.it/wp-content/uploads/2017/03/la-mia-valle-1133x1536.jpg"
    ) {
      setAranciocard(
        "https://www.kiteedizioni.it/images/products/books/copertine/107_cosevita.jpg"
      );
    } else if (
      aranciocard ===
      "https://www.kiteedizioni.it/images/products/books/copertine/107_cosevita.jpg"
    ) {
      setAranciocard(
        "https://freight.cargo.site/w/990/q/75/i/bd7bd053cc33e536124151a09405a5c2d17aaac23c492f92984bc3b5ce7fb2e5/cover_arancio2-copia.jpg"
      );
    }
  };

  const handleAnimalcard = (evt) => {
    evt.preventDefault();
    if (
      animalcard ===
      "https://www.arsedition.de/pondus/arsEdition/product/product-10253.png"
    ) {
      setAnimalcard("/lepron.jpg");
    } else if (animalcard === "/lepron.jpg") {
      setAnimalcard(
        "https://www.arsedition.de/pondus/arsEdition/product/product-10253.png"
      );
    }
  };

  return (
    <section id="treesbody">
      <Indietro />
      <section id="treescomp">
        <div className="titolo">
          <p>ARE BOOKS</p>
          <img
            className="pinocchietto"
            src="https://www.arsedition.de/pondus/arsEdition/product/product-4587.png"
            alt="Der Baum der Erinnerung, copertina (dal sito della casa editrice tedesca)"
          />
          <img
            className="pinocchietto"
            id="murdo"
            src="/alberoMurdo.jpg"
            alt="particolare di Murdo (foto mia)"
          />
          <p>TREES?</p>
          <a
            href="https://liuna-virardi.blogspot.com/2017/12/four-seasons.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="pinocchietto"
              src="https://3.bp.blogspot.com/-o0_0n-E9xmE/WjeOTchvTqI/AAAAAAAAGDQ/jV05xdFopKIhNxB79t_oeIycTU6zX2RXwCLcBGAs/s400/IMG_5254.jpg"
              alt="albero in autunno (dal sito di Liuna Virardi)"
            />
          </a>
          <img
            className="pinocchietto"
            src="/Vola.jpg"
            alt="particolare di Sulla vita sfortunata dei vermi"
          />
        </div>
        <section id="trees">
          <a
            href="https://www.beatricecerocchi.com/INTERNATIONAL-WOMEN-S-DAY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="treecard"
              src="https://payload.cargocollective.com/1/18/597877/13421472/Mimosa-gif2.gif"
              alt="mimosa (dal sito dell'illustratrice Beatrice Cerocchi)"
            />
          </a>
          <img
            className="animalcard"
            src={animalcard}
            alt="libro illustrato di poesie sugli animali, tigre in primo piano; oppure copertina di La zuppa Lepron"
            onClick={handleAnimalcard}
          />
          <img
            className="pinocard"
            src={aranciocard}
            alt="copertina con albero"
            onClick={handleArancio}
          />
        </section>
        <div className="titolo">
          <img
            className="pinocchietto"
            src="https://www.kiteedizioni.it/images/products/books/copertine/111_venditorefelicita.jpg"
            alt="Il venditore di felicità, copertina (dal sito della casa editrice Kite)"
          />
          <a
            href="https://www.adelphi.it/libro/9788845916717"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* pic from Pixaby thanks to kaosnoff */}
            <img
              className="pinocchietto"
              src="/pinocchio-2.jpg"
              alt="pinocchio seduto"
            />
          </a>
          <p>ARE FLOWERS</p>
          <img
            className="pinocchietto"
            src="https://www.ippocampoedizioni.it/spool/i__id63_crop640x640c__1x.jpg"
            alt="Inventario dei fiori, copertina (dal sito dell'editore italiano L'ippocampo)"
          />
          <p>BOOKMARKS?</p>
        </div>
      </section>
      <div id="nav">
        <Link to="/3">»»</Link>
      </div>
    </section>
  );
}

export default Trees;
