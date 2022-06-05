import React from "react";

const SearchBar = ({searchChange}) => {

    return (
        <div className="pa2">
            <input className="pa3 ba b--orange" type="text" onChange={searchChange} placeholder="enter robots name" />
        </div>
    )
}

export default SearchBar;