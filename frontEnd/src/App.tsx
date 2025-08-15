//import { useState } from "react";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./assets/styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
