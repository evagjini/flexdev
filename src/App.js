import "./App.css";
import React from "react";
import NewNote from "./components/NewNote";
import { Route, Routes } from "react-router-dom";
import AllNotes from "./components/AllNotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllNotes />} />
      <Route path="/NewNote" element={<NewNote />} />
    </Routes>
  );
}

export default App;
