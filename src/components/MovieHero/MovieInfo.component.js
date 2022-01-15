import React from 'react'

const MovieInfo = () => {
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

            <h1 className='hidden lg:block text-white text-3xl font-bold'> Shang-Chi and the Legend of the Ten Rings</h1>
            <div className='flex flex-col-reverse lg:flex-col gap-3'>
            <div className='text-white font-light flex flex-col gap-2'>
                <h4> 4k &bull; English &bull; Action  </h4>
                <h4> 1h 53 min &bull; English &bull; Action,SCIfi, thriller  </h4>
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
