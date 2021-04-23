import React, {Component} from 'react';
import './searchBar.css'
// class SearchBar extends Component {
//     state={
//         userInput:''
//     }
//     handleChange(userInput){
//         this.setState({
//             userInput:userInput
//         });
//         this.props.globalSearch(userInput);
//     };

//     render(){
//         return (
//             <form action="/" method="get">
//                 <label htmlFor="header-search">
//                     <span className="header">Search</span>
//                 </label>
//                 <input
//                     onChange={event => this.handleChange(event.target.value)}
//                     value={this.state.userInput}
//                 />
//             </form>

//         );
//     }
// }

const SearchBar = (props) =>{
    return(
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="header">Search</span>
            </label>
            <input
                onChange={props.handleChange}
            />
        </form>
    )
}

export default SearchBar;


// type="text" 
// id="header search" 
// placeholder="search" 
// name="s"/>
// <button onClick={() => props.filterSong(props.music.id)}>Search</button>