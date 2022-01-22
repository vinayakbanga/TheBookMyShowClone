import React, { useContext } from 'react';
// import Cast from './Cast.component';
import { BiChevronRight, BiShareAlt } from 'react-icons/bi';
import { MovieCOntext } from '../../context/movie.context';
// import { AiTwotoneHeart } from 'react-icons/ai';
import MovieInfo from './MovieInfo.component';
 


const MovieHero = () => {

  const { movie }=useContext(MovieCOntext)
  return (
    <>
    {/* Mobile */}
      <div className=' relative md:hidden w-full' style={{height:"calc(180vw)"}}>
      <div className='absolute z-20 bottom-4 left-4'>
          <MovieInfo/>
        </div>
        <div className='w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0'/>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt='poster'
          className='w-full h-full'
        />
      </div>
        {/* Tab */}
      <div className=' relative hidden md:block  w-full lg:hidden' style={{height:"calc(100vw)"}}>
      <div className='absolute z-20 bottom-4 '>
          <MovieInfo/>
        </div>
      <div className='w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0'/>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt='poster'
          className='w-full h-full'
        />
      </div>

      <div className='relative hidden lg:block ' style={{ height: '30rem' }}>
        
        <div
          className='absolute h-full w-full z-10'
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)',
          }}
        />
        <div className='absolute z-30 left-20 top-20 flex items-center gap-10'>
        <div className='  h-96 '>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className='h-full w-64 rounded-xl'
          />
          
          
        </div>
        <div>
          <MovieInfo/>
        </div>
        </div>
        <div>
          <button className='btn flex px-4 py-2 text-xl text-white bg-opacity-50 backdrop-filter backdrop-blur bg-navCol-800 absolute top-12 right-20 rounded-md'>
            <BiShareAlt className='mt-1 mr-2' size={25} /> Share
          </button>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt='poster'
          className='mx-auto w-full h-full'
        />
        </div>
    </>
  );
};

export default MovieHero;