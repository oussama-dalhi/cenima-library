import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import "./App.css";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
