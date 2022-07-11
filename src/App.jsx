import { ActionButton } from "./components/ActionButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;