import React, {Component} from 'react';

class SongCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            artist:'',
            album:'',
            release_date:''
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Title:</label>
                            <input type=" text" name="title" value={Tthis.state.title}
                            onChange={}/>
                        </div>
                        <div className="col=md-4">
                            <label>Artist:</label>
                            <input type=" text" name="artist" value={this.state.artist}
                            onChange={}/>
                        </div>
                        <div className="col-md-4">
                            <label>Album:</label>
                            <input type="text" name="album" value={this.state.album}
                            onChange={}/>
                        </div>
                        <div className="col=md=4">
                            <label>Release Date:</label>
                            <input type="text" name="release_date" value={this.state.release_date}
                            onChange={}/>
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Add"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default SongCreator;