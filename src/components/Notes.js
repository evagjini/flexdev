// @ts-nocheck
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Notes({ filteredNotes, deletedNotes }) {
  const handleDeleteNote = (id) => {
    deletedNotes(id);
  };

  return (
    <div className="all-notes">
      {filteredNotes.map((note) => (
        <>
          <div key={note.id} className="note-container">
            <div className="note-content">
              <h3 className="title">{note.title}</h3>
              <p>{note.description}</p>
            </div>
            <div className="header-buttons">
              <button
                className="buttons delete-button"
                onClick={() => handleDeleteNote(note.id)}
              >
                <h3 style={{ flex: 1, color: "white" }}>Delete Note</h3>
                <FontAwesomeIcon
                  style={{
                    fontSize: "15px",
                    color: "white",
                  }}
                  icon={faTrash}
                />
              </button>
            </div>
          </div>
          <hr className="break-style" />
        </>
      ))}
    </div>
  );
}
