import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
        placeholder="Buscar..."
      />
      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
