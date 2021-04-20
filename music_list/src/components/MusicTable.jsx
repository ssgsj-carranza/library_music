import React from 'react'

const MusicTable = (props) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Ttile</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}

export default MusicTable;