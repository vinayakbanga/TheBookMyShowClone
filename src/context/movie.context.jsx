import React, { useState }  from "react";

export const MovieCOntext= React.createContext();

const MovieProvider =({ children }) => {


    const [movie, setMovie] = useState({
        id:0,
        orignal_title:" ",
        overview : " ",
        backdrop_path: " ",
        poster_path:" ",

    })

    return <MovieCOntext.Provider value={{movie,setMovie}}>
        {children}
    </MovieCOntext.Provider>
}


export default MovieProvider;