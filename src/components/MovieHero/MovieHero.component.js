import React from 'react';
// import Cast from './Cast.component';
import { BiChevronRight, BiShareAlt } from 'react-icons/bi';
import { AiTwotoneHeart } from 'react-icons/ai';
const MovieHero = () => {
  return (
    <>
      <div className='md:hidden'>
        <img
          src='https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
          alt='poster'
        />
      </div>
  
      <div className='hidden md:block lg:hidden'>
        <img
          src='https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
          alt='poster'
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
        <div className='absolute z-30  h-96 left-64 top-20'>
          <img
            src='https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
            className='h-full w-64 rounded-xl'
          />
          <div className='absolute w-96  h-96 left-80  top-1 '>
            <div>
              <h1 className='text-white font-bold text-3xl'>
                Shang-Chi and the Legend of the Ten Rings
              </h1>
              <div className='text-white flex-row justify-evenly py-5'>
                <div className=' font-semibold text-2xl  flex '>
                  <AiTwotoneHeart className='text-vaish-300 ' size={30} />
                  <span className='mr-2 ml-1'>91%</span>
                  <span className='font-light text-lg flex mt-1'>
                    29.8k ratings <BiChevronRight className='mt-2' size={15} />
                  </span>
                </div>
              </div>
              <div className='bg-vaish-100 text-white px-5 py-2 rounded-lg flex justify-between'>
                <div>
                  <h3 className='font-semibold'>Add your rating & review</h3>
                  <h5 className='text-vaish-200'>Your ratings matter</h5>
                </div>
                <div>
                  <button class='bg-gray-100  text-black  py-2 mt-1 px-4 rounded-xl '>
                    Rate now
                  </button>
                </div>
              </div>
              <div className='max-w-xs text-vaish-100 mt-5 px-2 font-semibold rounded-sm bg-gray-100'>
                2D, 3D, 4D, 5D, IMAX 2D, MX4D, 4DX
              </div>
              <div className=' text-vaish-100 mt-2 px-2  font-semibold rounded-sm bg-gray-100'>
                English , Kannada , Tamil , Hindi , Malayalam
              </div>
              <div className='text-white mt-2 py-2 text-base font-thin rounded-sm '>
                2h 12m • Action , Adventure , Fantasy • UA • 3 Sep
              </div>
              <button  class='bg-vaish-300  text-white  py-2 mt-1 px-11 rounded-lg'>
                Book tickets
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className='btn flex px-4 py-2 text-xl text-white bg-opacity-50 backdrop-filter backdrop-blur bg-navCol-800 absolute top-12 right-20 rounded-md'>
            <BiShareAlt className='mt-1 mr-2' size={25} /> Share
          </button>
        </div>
        <img
          src='https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg'
          alt='poster'
          className='mx-auto w-full h-full'
        />
        </div>
    </>
  );
};

export default MovieHero;