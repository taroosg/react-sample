import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";

const App = () => {
  return (
    <HashRouter basename="/">
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
      </Routes>
    </HashRouter>
  );
};
export default App;