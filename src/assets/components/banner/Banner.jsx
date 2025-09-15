import React from "react";
import bgImage from "../../img/Banner-min.jpg";

const Banner = () => {
  return (

<>

<div
  className=" "
  style={{
    backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
        
      
  }}
>
  <div className="hero-overlay"></div>

  {/* content  */}

  <div 
  style={{transform: 'scaleX(-1)'}}
   className="text-white text-left p-[10%] justify-start ">
    <div className="max-w-[60%] ">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5 font-extralight">
        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn btn-primary bg-white text-black rounded-4xl py-6 px-8">Explore Auctions</button>
    </div>
  </div>

  
</div>

</>

  );
};

export default Banner;