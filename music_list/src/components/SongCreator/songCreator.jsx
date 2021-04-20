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
                            <input type=" text" name="title" value={TouchList.state.title}
                            onChange={}/>
                        </div>
                        <div className="col=md-4">
                            <label>Artist:</label>
                            <input type=" text" name="artist" value={TouchList.state.artist}
                            onChange={}/>
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}
export default SongCreator;