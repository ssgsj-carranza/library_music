import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import MusicTable from './components/MusicTable';
import Music from './components/Music';

class App extends Component {
    state = {
        music: []
    }

    componentDidMount(){
        this.getAllSongs();
}
    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            music: response.data
        })
    }

    mapSongs(){
        return this.state.music.map(music => {
            <Music
            key={music.id}
            music = {music}
            />
        })
    }
    render(){
        return(
            <div>
                <MusicTable mapSongs={() => this.mapSongs()}/>
            </div>
        );
    }
}

export default App;