import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
//25f79907

const API_URL='http://www.omdbapi.com?apikey=25f79907'

const movie1=
    {
        "Title": "Spider-Man Title Reveal",
        "Year": "2021",
        "imdbID": "tt14122734",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
    }



const App=()=>{

    const searchMovies= async (title)=>{
        const response = await fetch(`${API_URL}&s={title}`);
        const data= await response.json();

        console.log(data.Search);
    
    }

    useEffect(()=>{
        searchMovies('spiderman');

    },[]);

    return(
        <div className="app">
           <h1>MovieCorner</h1> 

           <div className="search">
            <input placeholder="Search for movies"
            value="Superman"
            onChange={()=>{}}/>
            <img
            src={SearchIcon} alt="search"
            onClick={()=>{}}
            />
           </div>

            <div className="container">

            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img src={movie1.Poster}/>
                </div>
            </div>
            </div>

        </div>
    );
}

export default App;