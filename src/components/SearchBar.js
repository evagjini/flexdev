import React from "react";

export default function SearchBar({ search, onSearchChange }) {
  return (
    <input
      className="search-input"
      style={{ padding: 6 }}
      placeholder="Search..."
      value={search}
      onChange={(event) => {
        onSearchChange(event.target.value);
      }}
    />
  );
}
