import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
const settings = {
    
    infinite: true,
    autoplay :false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    nextArrow: (
      <div>
        <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
          <BiChevronRight/>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className='prev-slick-arrow bg-black  p-1 bg-opacity-50 backdrop-filter rounded-full  absolute'>
          <BiChevronLeft/>
        </div>
      </div>
    ),
    responsive: [
      {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        nextArrow: (
          <div>
            <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
              <BiChevronRight/>
            </div>
          </div>
        ),
        prevArrow: (
          <div>
            <div className='prev-slick-arrow bg-black  p-1 bg-opacity-50 backdrop-filter rounded-full  absolute'>
              <BiChevronLeft/>
            </div>
          </div>
        )
      }
    
    },
    {
      breakpoint:1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: (
          <div>
            <div className='next-slick-arrow bg-black   bg-opacity-50 backdrop-filter rounded-full  absolute'>
              <BiChevronRight/>
            </div>
          </div>
        ),
        prevArrow: (
          <div>
            <div className='prev-slick-arrow bg-black  p-1 bg-opacity-50 backdrop-filter rounded-full  absolute'>
              <BiChevronLeft/>
            </div>
          </div>
        )
      }
      
    }
  ]
    
    
  };
  export default settings;