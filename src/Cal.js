import { Link } from "react-router-dom";

function Cal() {
  return (
    <div className="cal">
      <div className="day">
        <p id="primo">
          <b>
            1 Wednesday | March 2023
            <br />
            <br />
            TO DO:
          </b>
          <i> are books animals or plants? </i>
          <Link to="/1">»»</Link>
        </p>
      </div>
      <div className="day">
        <p id="secondo">
          <b>
            2 Thursday | March 2023
            <br />
            <br />
            TO DO:
          </b>
          <i> are flowers bookmarks? what if it rains? </i>
          <Link to="/2">»»</Link>
        </p>
      </div>
      <div className="day">
        <p id="terzo">
          <b>
            3 Friday | March 2023
            <br />
            <br />
            TO DO:
          </b>
          <i> are children poems? and words music? </i>
          <Link to="/3">»»</Link>
        </p>
      </div>
      <div className="day">
        <p id="quarto">
          <b>
            4 Saturday | March 2023
            <br />
            <br />
            TO DO:
          </b>
          <i> books are places and I am a silent reader (?) </i>
          <Link to="/4">»»</Link>
        </p>
      </div>
      <div className="day">
        <p id="quinto">
          <b>
            5 Sunday | March 2023
            <br />
            <br />
            TO DO:
          </b>
          <i> were they born from eggs, children? and books? </i>
          <Link to="/5">»»</Link>
        </p>
      </div>
      <footer>
        <b>&#169; otaria-o 2023</b>
      </footer>
    </div>
  );
}

export default Cal;
