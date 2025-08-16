//import { useState } from "react";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./assets/styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [games, setGame] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        console.log(res);
        setGame(res.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  });
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards games={games} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
