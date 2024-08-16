"use client"
import React, { useState } from "react";

function Navbar() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const handleMenuToggle = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <main>
            <div className="container-sm border rounded bg-white flex items-center p-1 justify-between">
                <div className="flex">
                    {/* Mobile Menu Button */}
                <div className="flex items-center  p-1 lg:hidden">
                    <button onClick={handleMenuToggle} aria-label="Toggle menu">
                        <img src="/images/menu.svg" width={30} alt="Menu icon" />
                    </button>
                </div>

                {/* Logo */}
                <div className="w-5/12 pl-2">
                    <img src="/images/logo.png" width={350} alt="Logo" />
                </div>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex lg:items-center lg:gap-5 lg:mx-4">
                    <ul className="flex gap-5">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">Leads</a></li>
                        <li><a href="#" className="hover:text-blue-600">Opportunities</a></li>
                        <li><a href="#" className="hover:text-blue-600">Learners</a></li>
                        <li><a href="#" className="hover:text-blue-600">Courses</a></li>
                        <li><a href="#" className="hover:text-blue-600">Activities</a></li>
                        <li><a href="#" className="hover:text-blue-600">Analytics</a></li>
                    </ul>
                </nav>

                {/* Desktop Icons */}
                <div className="hidden lg:flex lg:items-center lg:gap-2 text-2xl">
                    <ul className="flex gap-2">
                        <li><a href="#" aria-label="AI Icon"><img src="/images/iconAI.webp" width={30} alt="AI Icon" /></a></li>
                        <li><a href="#" aria-label="Notifications"><i className="fa-regular fa-bell"></i></a></li>
                        <li><a href="#" aria-label="User Profile"><i className="fa-regular fa-user"></i></a></li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
                <nav className="flex flex-col items-center p-4">
                    <ul className="flex flex-col gap-4">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">Leads</a></li>
                        <li><a href="#" className="hover:text-blue-600">Opportunities</a></li>
                        <li><a href="#" className="hover:text-blue-600">Learners</a></li>
                        <li><a href="#" className="hover:text-blue-600">Courses</a></li>
                        <li><a href="#" className="hover:text-blue-600">Activities</a></li>
                        <li><a href="#" className="hover:text-blue-600">Analytics</a></li>
                    </ul>
                </nav>
            </div> */}
        </main>
    );
}

export default Navbar;


// "use client";
// import React, { useState } from "react";
// function Navbar() {
 
//     return (
//         <main>
//             <div className="container-sm border rounded bg-white   flex items-center p-1 justify-between   ">
//                 <div className="flex items-center gap-2 p-1">
//                     <img src="/images/menu.svg" width={30} onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden cursor-pointer"></img>
//                     <div className="w-5/12 pl-2">
//                         <img src="/images/logo.png" width={350} />
//                     </div>
//                 </div>
//                 <nav className="hidden lg:flex lg:items-center lg:gap-5 lg:mx-4">
//                     <ul className="flex gap-5 ">
//                         <li ><a href="#" >Home</a></li>
//                         <li ><a href="#">Leads</a></li>
//                         <li ><a href="#" >Oppartunities</a></li>
//                         <li><a href="#" >Learners</a></li>
//                         <li><a href="#" >Courses</a></li>
//                         <li><a href="#" >Activities</a></li>
//                         <li><a href="#" >Analytics</a></li>
//                     </ul>
//                 </nav>

//                 <div className="hidden lg:flex lg:items-center lg:gap-2 text-2xl ">
//                     <ul className="flex gap-2  ">
//                         <li ><a><img src="/images/iconAI.webp" width={30}></img></a></li>
//                         <li><a><i className="fa-regular fa-bell " ></i></a></li>
//                         <li><a><i class="fa-regular fa-user"></i></a></li>
//                     </ul>
//                 </div>
//                 {/* Mobile Menu */}
                
//             </div>
//         </main>
//     )
// }
// export default Navbar;
