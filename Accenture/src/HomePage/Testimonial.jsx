function Testimonial() {
    return <div className="bg-black">



        <div className="flex flex-col md:mt-0 md:ml-10 ml-2  mr-2 md:flex-row gap-10 bg-black text-white p-10">
            <span className="  " > <img className=" md:w-140 md:h-100" src="https://images.pexels.com/photos/6195665/pexels-photo-6195665.jpeg">
            </img></span>
            <span className="flex flex-col gap-10 mt-10 w-full  font-bold" >
                <p>"AI is only a technology. The value comes from reinvention of how we work, our workforces and the tools we use… We are making sure that we are leading the way with our own reinvention."</p>
            <p>Julie Sweet, quoted in Fortune, August/September 2025</p> 
            <span className="flex  flex-row   gap-3">
            <button className="ml-0">Read More  </button>
            <span className="text-white-600 bg-purple-800">{">"}</span>
            </span>
                 </span>
 

            
        </div>




    </div>;      
    }       


    export default Testimonial;