import React, {Component} from 'react';

const Search = (props) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually hidden">Search</span>
        </label>
        <input
            type="text" 
            id="header search" 
            placeholder="search" 
            name="s"/>
        <button onClick={() => props.filterSong(props.music.id)}>Search</button>
        {/* {props.mapSongs()} */}
    </form>
);

export default Search;