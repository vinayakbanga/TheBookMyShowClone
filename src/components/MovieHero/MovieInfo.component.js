import React, { useContext } from 'react'

//context
import { MovieCOntext } from '../../context/movie.context'

const MovieInfo = () => {

    const { movie } = useContext(MovieCOntext);
    //optional chaining
    const genres = movie.genres ?.map(({name})=>name).join(", ");

    return (
        <>
        <div className='flex flex-col gap-3 md:px-3'>
            <div className='flex items-center gap-3 '>
            <div className='w-40 h-8'>
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
            </div>
            <span className='bg-navcol-700 p-1 text-xs text-white rounded-md'>Streaming</span>
            </div>

            <h1 className='hidden lg:block text-white text-3xl font-bold'> {movie.original_title}</h1>
            <div className='flex flex-col-reverse lg:flex-col gap-3'>
            <div className='text-white font-light flex flex-col gap-2'>
                <h4> 4k &bull; {movie.original_language}   </h4>
                <h4> {(movie.runtime / 60).toFixed(2)} h  &bull; {genres}  </h4>
            </div>
            <div className='flex items-center gap-3 md:px-4 md:w-screen lg:w-full'>
                <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                    Rent 149
                </button>
                <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg'>
                    buy 149
                </button>

            </div>
            </div>
        </div>
        </>
    )
}

export default MovieInfo
