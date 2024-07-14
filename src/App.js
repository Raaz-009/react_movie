import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";



const API_URL=`http://www.omdbapi.com?apikey=YOUR_API_KEY`

// const movie1=
//     {
//         "Title": "Spider-Man Title Reveal",
//         "Year": "2021",
//         "imdbID": "tt14122734",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
//     }



const App=()=>{
    const [searchTerm,setsearchTerm]=useState('');
    const [movies,setMovies]=useState([]);

    const searchMovies= async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);

        const data= await response.json();

       setMovies(data.Search);
    
    }

    useEffect(()=>{
        searchMovies('superman');

    },[]);

    return(
        <div className="app">
           <h1>MovieCorner</h1> 

           <div className="search">
                <input placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}/>
                <img
                src={SearchIcon} alt="search"
                onClick={()=>searchMovies(searchTerm)}
                />
           </div>
          

         { movies?.length>0
         ?(
            <div className="container">
               {movies.map((movie)=>(
                <MovieCard movie={movie}/>
                ))}
            </div>
            ):(
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
}

export default App;