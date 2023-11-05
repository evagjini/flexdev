import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function NewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) ?? []
  );
  const navigate = useNavigate();

  const createNewNotes = () => {
    const newNote = {
      id: notes.length + 1,
      title,
      description,
    };

    setNotes([...notes, newNote]);
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));

    console.log(notes);

    setTitle("");
    setDescription("");
    navigate("/");
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <form onSubmit={onSubmitForm} className="form-inputs">
            <div>
              <input
                className="new-note-input"
                type="text"
                id="title"
                placeholder=" Add a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <hr className="break-style" />
            <div>
              <textarea
                className="new-note-input"
                style={{ height: "100vh" }}
                id="title"
                placeholder="Write your note here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="header-buttons" style={{ justifyContent: "flex-end" }}>
        <Button onClick={createNewNotes}>
          <h3 style={{ flex: 1, fontSize: "17px" }}>Save changes</h3>
          <span>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: "17px", marginRight: "2px" }}
            />
          </span>
        </Button>
      </div>
    </>
  );
}
