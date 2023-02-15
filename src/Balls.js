import { Link } from "react-router-dom";
import Indietro from "./Indietro";

function Balls() {
  return (
    <section id="ballsbody">
      <Indietro />
      <section id="balls">
        <header id="friends">
          <h2>are pictures silent?</h2>
        </header>
        <div id="container">
          <div id="red">
            <h2>are books friends?</h2>
          </div>
          <div>
            <a
              href="http://www.beatricealemagna.com/mon-amour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="picbooks"
                src="/Alemagna.jpg"
                alt="particolare di Mio amore (foto mia)"
              />
            </a>
          </div>
          <div id="purple">
            <h2>are books boring?</h2>
          </div>
          <div>
            <a
              href="http://www.suzyleebooks.com/books/wave/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="picbooks"
                src="/Lee.jpg"
                alt="particolare di L'onda (foto mia)"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.jimmyspa.com/en/Books/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="picbooks"
                src="/Liao.jpg"
                alt="particolare di Se potessi esprimere un desiderio... (foto mia)"
              />
            </a>
          </div>
          <div id="brown">
            <h2>are colors friends?</h2>
          </div>
          <div>
            <a
              href="https://www.melanierutten.com/publications.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="picbooks"
                src="/Rutten.jpg"
                alt="particolare del libro di L'ombra di ognuno (foto mia)"
              />
            </a>
          </div>
          <div>
            <a
              href="https://copic.jp/en/collaboration/illustration/yoshitake-shinsuke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="picbooks"
                src="/boring.jpg"
                alt="particolare di The boring book (foto mia)"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.andersen.it/miglior-libro-6-9-anni-vincitore21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="picbooks"
                src="/Murdo.jpg"
                alt="particolare di Murdo (foto mia)"
              />
            </a>
          </div>
        </div>
      </section>
      <div id="nav">
        <Link to="/5">»»</Link>
      </div>
    </section>
  );
}

export default Balls;
