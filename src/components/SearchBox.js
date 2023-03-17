import React from "react";

import { useState } from "react";

export default function SearchBox() {

    const [isExpanded, setExpand] = useState(true);

    const expandSearchBar = () => {
        setExpand(!isExpanded)
    };

    return (
        <div className="search-box">
            <input type="text" placeholder="Sök..." className={isExpanded ? "" : "active"} id="input"/>
            <button id="search-btn" className={isExpanded ? "" : "animate"} type="submit" onClick={expandSearchBar}>
                <img src="BilderSmaller/search_black_36dp.svg" className="search-icon" alt="Sök" />
            </button>
        </div>
    )
}