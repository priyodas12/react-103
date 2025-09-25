import React from "react";
import './Search.css';
function Search(){
    return <div id="searchbar">
        <input type="search" name="search-res" id="search-input" />
        <button type="submit" id="search-submit-button">Search</button>
    </div>
}

export default Search;