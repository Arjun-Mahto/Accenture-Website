// // src/components/Navbar.jsx


// import React from "react";
 import { ChevronDown, Globe, Search,Menu } from "lucide-react";
import { useState } from "react"; 

// export default function Navbar() {
//   return (
//     <nav className="bg-black text-white fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-16">
//           {/* Left: Logo */}
//           <div className="flex items-center">
//             <span className="text-purple-600 text-5xl font-bold cursor-pointer hover:">{">"}</span>
//           </div>

//           {/* Center: Nav Links */}
//           <ul className="hidden md:flex space-x-8 text-sm font-medium">
//             <li className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">
//               What we do <ChevronDown size={16} />
//             </li>
//             <li className="hover:text-purple-400 cursor-pointer">
//               What we think
//             </li>
//             <li className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">
//               Who we are <ChevronDown size={16} />
//             </li>
//             <li className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">
//               Careers <ChevronDown size={16} />
//             </li>
//           </ul>

//           {/* Right: Icons */}
//           <div className="flex items-center space-x-6">
//             <Search size={18} className="cursor-pointer hover:text-purple-400" />
//             <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400">
//               <Globe size={18} />
//               <span>India</span>
//               <ChevronDown size={16} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }




function Navbar() {

  const [isOpen, setIsOpen] = useState(false);




  return (
    <>
      <nav className="bg-black text-white fixed w-full ">
        
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-16 justify-between max-w-200">
          {/* Left: Logo */}
          <div className="flex items-center gap-4 md:gap-1 h-16">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}> {isOpen ? "✖" : "☰" } </button>
             {isOpen && (
            
        <ul className="md:hidden  mt-50 text-black ml-0" >
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      )}
          
            <span className="text-purple-600 text-5xl font-bold cursor-pointer  ml-35 md:ml-0 flex content-center mb-1.5 fixed ">{">"}</span>
            <span className="ml-70 md:hidden fixed"><Search /> </span>
          <div className="items-center hidden md:flex space-x-8 text-sm font-medium md:ml-95 md:w-400">
            <ul  className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">What we do <ChevronDown size={18} /></ul>
            <ul className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">What we think <ChevronDown size={18} /></ul>
            <ul className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">What we are <ChevronDown size={18} /></ul>
            <ul className="flex items-center gap-1 hover:text-purple-400 cursor-pointer">Carriers <ChevronDown size={18} /></ul>
            <span className=" hidden md:inline-block md:ml-45"><Search />

            </span>
<div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 ">
                  <Globe size={18} />
               <span>India</span>
              <ChevronDown size={16} />         
            </div>

             
          </div>
          
          </div>
          </div>
          </div>
            </nav>


    </>
  )
}



 

export default Navbar