import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      className="buttons"
      style={{
        color: "white",
        backgroundColor: "#71cf48",
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
