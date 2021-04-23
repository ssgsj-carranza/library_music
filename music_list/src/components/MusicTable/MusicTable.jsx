import React from 'react'
import './MusicTable.css'


const MusicTable = (props) => {
    console.log(props)
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}

export default MusicTable;