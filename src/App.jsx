import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import "./App.css";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="main-content">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
