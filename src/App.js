import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Cal from "./Cal";
import Animals from "./Animals";
import Trees from "./Trees";
import Poetry from "./Poetry";
import Balls from "./Balls";
import Eggs from "./Eggs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cal />}></Route>
        <Route path="/1" element={<Animals />}></Route>
        <Route path="/2" element={<Trees />}></Route>
        <Route path="/3" element={<Poetry />}></Route>
        <Route path="/4" element={<Balls />}></Route>
        <Route path="/5" element={<Eggs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// TO DO:
// media queries
// generico handleClick
