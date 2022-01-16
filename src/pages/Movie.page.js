import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";
// import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import CrewCircle from "../components/castcarousel/crewcircle";

const launchRazorPay = () => {
   let options = {
     key: "rzp_test_UN92cpW1fZc7mE",
     amount: 500*100,
     currency: "INR",
     name: "Book My Show Clone",
     description: "Movie Purchase on Rental",
     image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
     handler: () => {
       alert("Payment Done")
     },
     theme: {color: "#c4242d"}
   };
   let rzp = new window.Razorpay(options);
   rzp.open();
 };



const  Movie = () => {
    return (
    <>
    <MovieHero/>
        <div className="my-12 container px-4 lg:w-2/3 lg:ml-20">
            <div className="flex flex-col items-start gap-3">
               <h2 className="text-gray-800 font-extrabold text-2xl">About the movie</h2>
               <p className="text-black "> Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
            </div>
            <div className="my-8 " >
                <hr />
            </div>

            <div className="flex flex-col items-start gap-3 ">
                <h1 className="font-extrabold text-2xl mb-3">Applicable Offers</h1>
                <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex items-start gap-2 bg-yellow-100 border-2  border-dashed border-yellow-400 lg:w-1/2 p-3"> 
                    <div className="w-8 h-8">
                    <BiCameraMovie className="w-full h-full"/>
                    </div>

                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-l">Filmy Pass </h3>
                    <p className="text-gray-800 text-sm">Get Rs.75* off on 3 movies you buy/rent on stream. Buy Filmy Pass @Rs.99</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-yellow-100 border-2  border-dashed border-yellow-400 lg:w-1/2 p-3"> 
                    <div className="w-8 h-8">
                    <BiCameraMovie className="w-full h-full"/>
                    </div>

                  <div className="flex flex-col items-start">
                    <h3 className="font-bold text-l">Filmy Pass </h3>
                    <p className="text-gray-800 text-sm">Get Rs.75* off on 3 movies you buy/rent on stream. Buy Filmy Pass @Rs.99</p>
                  </div>
                </div>
                </div>

            </div>
            <div>
            <h2 className="text-gray-800 font-bold text-2xl py-5">Cast and crew</h2>

       <div className="flex flex-wrap gap-4 ">
       <CrewCircle image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg"
           
           castName="Henry Cavil"
           role="test"
       />

        <CrewCircle image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg"
           
           castName="Henry Cavil"
           role="test"
       />
       <CrewCircle image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg"
           
           castName="Henry Cavil"
           role="test"
       />
       <CrewCircle image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg"
           
           castName="Henry Cavil"
           role="test"
       />


       </div>
       </div>

       <button onClick={launchRazorPay} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded">
  Book Tickets
</button>

    
       
    
    </div>
    </>
    );
    };

export default Movie;