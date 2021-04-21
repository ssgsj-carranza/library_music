import React from 'react'

const Music = (props) => {
    return(
        <tbody>
            <tr>
                <td>{props.music.title}</td>
                <td>{props.music.artist}</td>
                <td>{props.music.album}</td>
                <td>{props.music.release_date}</td>
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </tr>
        </tbody>
    );
}
export default Music;