// @ts-ignore
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Notes from "./Notes";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function AllNotes() {
  let notes = [];
  // @ts-ignore
  if (localStorage.key("notes")) {
    // @ts-ignore
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  const [allNotes, setAllNotes] = useState(notes);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredNotes = allNotes.filter((note) => {
    return (
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  const navigateToNewNote = () => {
    navigate("/NewNote");
  };

  const deletedNotes = (id) => {
    const updatedNotes = allNotes.filter((note) => note.id !== id);
    // @ts-ignore
    setAllNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  return (
    <div className="container">
      <div className="header">
        <div className="buttons-container">
          <div className="header-buttons">
            <Button onClick={navigateToNewNote}>
              <h3 style={{ flex: 1, fontSize: "17px" }}>Create Note</h3>
              <span>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ fontSize: "17px", marginRight: "2px" }}
                />
              </span>
            </Button>
            <div>
              <SearchBar search={search} onSearchChange={setSearch} />
            </div>
          </div>
          <Notes filteredNotes={filteredNotes} deletedNotes={deletedNotes} />
        </div>
      </div>
    </div>
  );
}

export default AllNotes;
