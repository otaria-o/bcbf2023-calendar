function Text({ handleSexton, showSexton, showT }) {
  return (
    <div id="eggscit">
      {showSexton && (
        <div className="eggscit" onClick={handleSexton}>
          <p>
            Words and eggs must be handled with care.
            <br />
            Once broken they are impossible
            <br />
            to repair.
            <br />
            <br />
            <i>Anne Sexton</i>
          </p>
        </div>
      )}
      {showT && (
        <div className="eggscit">
          <p>
            Decisa, indaffarata, tenace, intrecciavo il nido e preparavo tutto
            per le uova come se la vita di tutta la natura dipendesse dal mio
            zelo. “Lei non può venire, sta facendo le uova,” dicevano i miei
            fratelli, andando a tavola. E mia madre, completamente immersa nel
            suo ruolo di madre di famiglia distratta, districava le mie membra
            intrecciate e mi trascinava fuori dal nido: “Come ti ho detto
            centomila volte, non devi fare le uova quando ti chiamo a tavola.”
            <br />
            <br />
            <i>Pamela Travers</i>
          </p>
        </div>
      )}
    </div>
  );
}

export default Text;
