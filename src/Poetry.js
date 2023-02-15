import { Link } from "react-router-dom";
import Indietro from "./Indietro";

function Poetry() {
  return (
    <section id="poemsbody">
      <Indietro />
      <div id="poems">
        <section className="carta">
          <div>
            <img
              src="https://www.salani.it/libri/rime-buie-9788831006958/image_preview"
              alt="Rime buie, copertina, dal sito dell'editore"
            />
          </div>
          <div className="testo">
            <h3>Rime buie</h3>
            <p>
              Bruno Tognolini
              <br />
              su immagini di Antonella Abbatiello
              <br />
              <br />
              Salani Editore
            </p>
            <br />
            <div className="comm">
              <p>
                Boschi dei rapimenti, isole da cui non si parte, bambini che
                sono piante.
                <br /> Diciotto fiabe nere, lucide, tragiche, narrazioni di un
                poeta cresciute come edera su altrettante visioni di un'artista.
                <br />
                <br />
                <i>[quarta di copertina]</i>
              </p>
            </div>
          </div>
        </section>
        <section className="carta">
          <div>
            <img src="/Bambini.jpg" alt="particolare di I bambini" />
          </div>
          <div className="testo">
            <h3>I bambini</h3>
            <p>
              Giovanna Zoboli
              <br />
              Tavole di Enrico Pantani
              <br />
              <br />
              Interno Poesia Editore
            </p>
            <div className="comm">
              <p>
                A me ogni volta
                <br />
                di Pinocchio
                <br />
                colpisce l'avanti e indietro
                <br />
                dal paese dei morti
                <br />
                l'inesigibile credito delle creature
                <br />
                il debito sinistro dell'orrore.
                <br />
                <br />
                <i>[p. 43]</i>
              </p>
            </div>
          </div>
        </section>
        <section className="carta">
          <div>
            <img src="/haiku_animals.jpg" alt="Haiku: Animals, copertina" />
          </div>
          <div className="testo">
            <h3>Haiku: Animals</h3>
            <p>
              edited by Mavis Pilbeam
              <br />
              <br />
              The British Museum Press
            </p>
            <br />
            <div className="comm">
              <p>
                I read a book - <br />
                somewhere within the book
                <br /> an insect chirps
                <br />
                <br />
                <i>[Tomiyasu Fusei]</i>
              </p>
            </div>
          </div>
        </section>
        <section className="carta">
          <div>
            <img
              src="https://www.beltz.de/fileadmin/_processed_/d/4/csm_9783407761187_24e8df7266.jpg"
              alt="Schreimutter, copertina dal sito dell'editore"
            />
          </div>
          <div className="testo">
            <h3>Schreimutter</h3>
            <p>
              Jutta Bauer
              <br />
              <br />
              BELTZ
            </p>
            <br />
            <div className="comm">
              <p>
                um Küßen, di traurige Überreste
                <br />
                nähen, nach einem sehr langen Weg
                <br />
                von müden Pfoten, um Worten,
                <br />
                die im Sonnenuntergang verstummen,
                <br />
                um Mutter.
                <br />
                <br />
                <i>[mein Kommentar]</i>
              </p>
            </div>
          </div>
        </section>
        <section className="carta">
          <div>
            <img
              src="https://effigiedizioni.files.wordpress.com/2015/04/ma-dove-sono.jpg?w=288&zoom=2"
              alt="Ma dove sono le parole? copertina dal sito dell'editore"
            />
          </div>
          <div className="testo">
            <h3>Ma dove sono le parole?</h3>
            <p>
              a cura di Chandra Livia Candiani
              <br /> con Andrea Cirolla
              <br />
              <br />
              Effigie edizioni
            </p>
            <br />
            <div className="comm">
              <p>
                Le mani che scrivono le poesie
                <br />
                sono le stesse mani
                <br />
                che fanno le pulizie.
                <br />
                <br />
                <i>[Ramayana, nove anni]</i>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div id="nav">
        <Link to="/4">»»</Link>
      </div>
    </section>
  );
}

export default Poetry;
