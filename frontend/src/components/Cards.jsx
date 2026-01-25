import React from 'react';
import "../styles/Cards.css";

// Import your images
import CardBg from "../assets/images/CardBg.png";
import DescBg from "../assets/images/DescBg.png";
import ArtistNameBg from "../assets/images/ArtistNameBg.png";


export default function Cards({details}) {
  return (
    // CHANGE HERE: 
    // 1. Used inline style marginBottom: '-30%' to aggressively pull the next card up.
    // 2. Added 'z-0' to keep stacking context manageable.
    <div 
      className="w-full flex justify-center relative z-1000"
      style={{ marginBottom: '-24%' }} 
    >
      
      {/* Card wrapper */}
      <div className="relative w-full max-w-9xl">

        {/* Card background */}
        <img
          src={CardBg}
          alt="card background"
          className="w-full h-full object-cover" 
        />

        {/* Artist Image */}
        <div className="absolute top-[24%] left-[22%] w-[20%] h-[400px] z-50">
          <img
            src={details.img}
            alt="Artist"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Name Section */}
        <div className="absolute top-[24%] left-[39%] w-[30%] z-10">
          <img src={ArtistNameBg} alt="name bg" className="w-full h-auto" />
          <span className="absolute inset-0 flex items-center justify-center pinyon-script-regular !text-[2.4rem]">
            {details.Name}
          </span>
        </div>

        {/* Description Section */}
        <div className="absolute top-[40%] left-[45%] w-[33%] z-10">
            <img src={DescBg} alt="description bg" className="w-full h-auto" />

            {/* Text overlay */}
            <div
                className="
                absolute 
                inset-0
                px-[8%] py-[10%]
                overflow-hidden
                w-[85%] left-[7%] top-[7%]
                "
            >
                <p
                className="
                    text-[1.1rem] font-extrabold
                    leading-relaxed
                    text-[#4a1f0f]
                    break-words
                    line-clamp-10
                    macondo-regular
                "
                >
                {details.desc}
                </p>
            </div>

            <div
                className="
                absolute 
                inset-0
                px-[8%] py-[10%]
                overflow-hidden
                w-[85%] left-[7%] top-[82%]
                "
            >
                <p
                className="
                    lg:text-[1.1rem] md:text-[0.8rem] font-black
                    leading-relaxed
                    text-[#4a1f0f]
                    break-words
                    line-clamp-6
                "
                >
                    Date : {details.date} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  Location : SJA, NITK
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};



       

        

