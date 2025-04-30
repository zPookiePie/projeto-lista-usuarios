import React from "react";

import "./index.scss"

function SearchBar({ onSearch }) {
    return (
        <input
            type="text"
            placeholder="Buscar por nome"
            onChange={(e) => onSearch(e.target.value)}
            className="search-bar"
        />
    )
}

export default SearchBar;