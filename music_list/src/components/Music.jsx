import React from 'react';

const Music = (props) => {
    return(
        <tbody>
            <tr>
                <td>{props.music.title}</td>
                <td>{props.music.artist}</td>
                <td>{props.music.album}</td>
                <td>{props.music.release_date}</td>
                <button onClick={props.deleteSong(props.music.id)}>Delete</button>                
            </tr>
        </tbody>
    );
}
export default Music;