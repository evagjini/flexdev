import React, { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Notes from "./Notes";
import SearchBar from "./SearchBar";
import allNotesData from "../mockData/allNotes.json";
import axios from "axios";

function HeaderButtons() {
  const [allNotes, setAllNotes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("/api/allNotesData")
      .then((response) => {
        setAllNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    // @ts-ignore
    setAllNotes(allNotesData);
  }, []);

  const filteredNotes = allNotes.filter((note) => {
    return (
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.description.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <div className="buttons-container">
      <div className="header-buttons">
        <div>
          <button
            className="buttons"
            style={{
              color: "white",
              backgroundColor: "#71cf48",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ flex: 1, fontSize: "17px" }}>Create Note</span>
            <span>
              <FontAwesomeIcon
                icon={faPlus}
                style={{ fontSize: "17px", marginRight: "2px" }}
              />
            </span>
          </button>
        </div>
        <div>
          <SearchBar search={search} onSearchChange={setSearch} />
        </div>
      </div>

      <Notes filteredNotes={filteredNotes} />
    </div>
  );
}

export default HeaderButtons;
