import React from "react";
export default function Notes({ filteredNotes }) {
  return (
    <div>
      {filteredNotes.map((note) => (
        <li style={{ listStyle: "none" }}>
          <h3 style={{ fontSize: "25px", color: "#494948" }}>{note.title}</h3>
          <p style={{ marginTop: "6px", fontSize: "22px", color: "#868984" }}>
            {note.description}
          </p>
          <hr className="break-style" />
        </li>
      ))}
    </div>
  );
}
