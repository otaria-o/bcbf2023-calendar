import { useState } from "react";
import { Link } from "react-router-dom";
import Indietro from "./Indietro";

function Animals() {
  const [esel, setEsel] = useState("/Benjamin.jpg");

  const handleEsel = (evt) => {
    evt.preventDefault();
    if (esel === "/Benjamin.jpg") {
      setEsel("/esel.jpg");
    } else if (esel === "/esel.jpg") {
      setEsel("/Benjamin.jpg");
    }
  };

  return (
    <section id="animalsbody">
      <Indietro />
      <section id="animalsgrid">
        <section id="animals">
          <div>
            <a
              href="https://www.noemivola.com/a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Vola.jpg"
                alt="particolare di Sulla vita sfortunata dei vermi (foto mia)"
              />
            </a>
          </div>
          <div>
            <img
              src={esel}
              alt="particolare di Mein Esel Benjamin (foto mia)"
              onClick={handleEsel}
            />
            <h2>
              <b>are books animals?</b>
            </h2>
          </div>
          <div>
            <img
              src="https://www.terre.it/wp-content/uploads/2018/01/Bjorn_COP_500px.jpg"
              alt="Björn, sei storie da orso, copertina (dal sito della casa editrice Terre di mezzo)"
            />
          </div>
          <div>
            <img
              src="https://alessandria.bookrepublic.it/api/books/9783944858715/cover?size=600x0"
              alt="Amor animalium, copertina (dal sito bookrepublic)"
            />
          </div>
          <div>
            <a
              href="https://maraymariann.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.milkbook.it/wp-content/uploads/2020/01/Un-cane-per-mimma-Mariann-Maray-Kalandraka-finale-800x1024.jpg"
                alt="particolare di Un cane per Mimma (foto mia)"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.nypl.org/about/locations/schwarzman/childrens-center-42nd-street/pooh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.salani.it/libri/winnie-puh-9788893812542/image_preview"
                alt="Winnie Puh, copertina dell'edizione italiana Salani (dal sito)"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.joweaver.co.uk/books"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/mumbear_littlebear.jpg"
                alt="mamma orsa e il suo cucciolo, particolare di Little One (foto mia)"
              />
            </a>
          </div>
        </section>
      </section>
      <div id="nav">
        <Link to="/2">»»</Link>
      </div>
    </section>
  );
}

export default Animals;
