const settings = {
    
    infinite: true,
    autoplay :false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    
    },
    {
      breakpoint:1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0
      }
      
    }
  ]
    
    
  };
  export default settings;