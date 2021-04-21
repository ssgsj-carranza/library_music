import React, {Component} from 'react';
import axios from 'axios';
// import './App.css';
import MusicTable from './components/MusicTable';
import Music from './components/Music';
// import TitleBar from './TitleBar/titleBar'
import SongCreator from './components/SongCreator/songCreator';

class App extends Component {
    state = {
        music: []
    }

    componentDidMount(){
        this.getAllSongs();
        console.log(this.state.music)
}
    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            music: response.data
        })
    }

    addNewSong(song){
        this.music.push(song);
        this.setState({
            songNumber: this.music.length - 1
        });
    }

    mapSongs(){
        return this.state.music.map(music => 
            <Music
                key={music.id}
                music={music}
            />
        )
    }
    render(){
        console.log("this.state", this.state);
        return(
            <div>
                <MusicTable mapSongs={() => this.mapSongs()}/>
                <SongCreator addNewSong={this.addNewSong.bind(this)}/>
            </div>
        );
    }
}

export default App;