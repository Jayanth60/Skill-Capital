"use client";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../../../component/navbar';
import React, { useState } from "react";





function home() {
  const data = [
    { x: new Date("2024-08-08T01:00:00").getTime(), y: 10 },
    { x: new Date("2024-08-08T02:00:00").getTime(), y: 15 },

  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
       setIsMenuOpen(!isMenuOpen);
   };
 
  return (
    

    <main className="bg-gray-200">
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
                    <img src="/images/logo.png" width={500} alt="Logo" />
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
      <div className="flex flex-wrap gap-9 justify-center pt-10 ">
      {["Not Contacted", "Warm Lead", "Attempted", "Registered", "Opportunity", "Cold Lead"].map((status, index) => (
          <div key={index} className="container-sm border rounded shadow-lg bg-white p-4 flex gap-5">
            <span className="bg-gray-300 border rounded-full p-2 text-violet-600">
              <i className="fa-solid fa-users"></i>
            </span>
            <span className="text-gray-500 text-xs">
              {status}
              <p className="text-black font-semibold text-sm">1</p>
            </span>
          </div>
        ))}
        
      </div>
      <div className="flex flex-wrap  justify-center gap-9 pb-5  pt-10     ">
        <div className=" w-full md:w-[850px] lg:w-[850px]">
        <div className=" container-sm shadow-lg  bg-white   pt-5  ">
          <h2 className="text-center font-bold">Today Leads</h2>
          <Chart
            type="line"
            width="100%"
            height={250}
            series={[
              {
                name: "products",
                data: [0.0, 0.5, 1.0, 1.5, 2.0],
              },
            ]}
            options={{
              chart: {
                id: "today-leads",
              },
              // xaxis: {
              //     categories: ['12am', '1am', '2am', '3am', '4am','5am','6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm']
              // },
              xaxis: {
                type: "datetime",
                labels: {
                  format: "HH:mm", // Hour and minute format
                },
                tickAmount: 11, // Adjust the number of ticks
                min: new Date("2024-08-08T01:00:00").getTime(),
                max: new Date("2024-08-08T23:00:00").getTime(),
              },
              // yaxis: {
              //     title: {
              //         text: 'Leads'
              //     }
              // },
              // title: {
              //     text: 'Leads Trend'
              // }
            }}
          />
        </div>
        </div>

        <div className="container-sm text-center pt-10  bg-white shadow-lg ">
          <h1 className="text-center ">Analytics</h1>
          <div className="pb-10 pr-10 pl-10 pt-3 ">
            <h1 className="border rounded-full p-16  text-center   font-bold"><p>0</p>Leads</h1>
          </div>
        </div>

      </div>
      


    </main>
  );
}
export default home;
