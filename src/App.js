import "./App.css";
import React from "react";
import NewNote from "./components/NewNote";
import { Route, Router, Routes } from "react-router-dom";
import HeaderButtons from "./components/HeaderButtons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderButtons />} />
      <Route path="/NewNote" element={<NewNote />} />
    </Routes>
  );
}

export default App;
