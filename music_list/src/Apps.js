import React, {Component, useState} from 'react';
import axios from 'axios';
// import './App.css';
import MusicTable from './components/MusicTable/MusicTable';
import Music from './components/Music';
import TitleBar from './components/TitleBar/titleBar';
import SongCreator from './components/SongCreator/songCreator';
// import {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar/searchBar'


class App extends Component {
    state = {
        music: [],
        filterSong:[],
        userInput:''
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
        this.state.music.push(song);
        this.setState({
            songNumber: this.state.music.length - 1
        });
    }

    mapSongs(){
        if(this.state.userInput === ''){
            return this.state.music.map(music => 
                <Music
                    deleteSong = {(songId) => this.deleteSong(songId)}
                    key={music.id}
                    music={music}
                />
            );
        }
        else{
            return this.state.filterSong.map(music =>
                <Music
                    deleteSong= {(songId) => this.deleteSong(songId)}
                    key ={music.id}
                    music={music}
                />
            );
        }
    }
    
    deleteSong(songId){
       axios.delete(`http://127.0.0.1:8000/music/${songId}`)
       this.getAllSongs();
    }

    filterSongs(input){
        axios.filter(`http://127.0.0.1:8000/music/${input}`)
        this.getAllSongs();
    }
    
    render(){
        console.log("this.state", this.state);
        return(
            <div>
                <TitleBar />
                <SearchBar filterSongs={(input) => this.filterSongs(input)} />
                <MusicTable mapSongs={() => this.mapSongs()}/>
                <SongCreator addNewSong={this.addNewSong.bind(this)}/>
            </div>
        );
    }
}

export default App;
