import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";




export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-6 bg-black">
      {/* Video */}


      <div className="flex flex-col md:flex-row  gap-4">
            <span >

      <video
        ref={videoRef}
        src="https://dynamicmedia.accenture.com/is/content/accenture/final/accenture-com/video/QATU1869000H-Goalposts-OLV-06-16x9-YouTube.mp4"
        className=" max-w-2xl rounded-lg shadow-lg w-full"
        />
      

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-300 transition"
        >
        {isPlaying ? <Pause /> :<Play />  }
      </button>
            </span>


      <span className="mt-10 ml-3 w-full md:w-160 flex flex-col gap-6"> <p className="font-bold text-3xl md:text-5xl text-white">Reinvention isn’t optional—it’s how leaders stay ahead.</p>
      <p className="text-white bg-purple-600">Across industries, organizations are rethinking how they grow, compete and lead. As the Official Business and Technology Consulting Sponsor of the NFL, we’re helping one of the world’s most iconic sports leagues keep moving the game forward.</p>
     <button className="ml-0  p-0 text-white bg-purple-500 w-30 h-15 font-bold cursor-pointer">Learn More</button>
      
      </span>
          </div>
    </div>
  );
}

