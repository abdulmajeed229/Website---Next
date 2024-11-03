"use client"

import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function AboutUS() {
   
    return (
        <div className="min-h-[100vh] w-full">

            <Navbar/>


    
            <div className="aboutBack h-[300px] bg-hero w-full bg-cover bg-center flex justify-start items-center px-4 sm:px-6 md:px-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold ml-4 sm:ml-6 md:ml-10 lg:ml-20">
                    About
                </h1>
            </div>

         
            <div className="flex flex-col lg:flex-row">
                <div className="p-6 sm:p-10 md:p-16 lg:p-20 w-full lg:w-1/2">
                    <h3 className="text-[#4343a5] text-lg md:text-xl lg:text-2xl">WHO WE ARE</h3>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-serif mt-2">
                        Ways to Help
                    </h1>
                    <span className="block text-[#ac4e4e] text-lg md:text-xl lg:text-xl mt-2">________</span>
                    <p className="text-[#555555] text-base sm:text-lg md:text-xl lg:text-2xl font-mono mt-4">
                        Blood Center is a public donation center with blood donation members in the changing health care system. Founded in 1978, Blood Center is one of the nation’s oldest and largest nonprofit transfusion medicine organizations. We provide blood and volunteer services across the US. With our national footprint, deep community roots, and specialized services, we are the thread that connects people and resources together to fuel progress in transfusion medicine.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
                    <img src="./tech.jpg" alt="Blood Center" className="w-full h-auto max-w-full" />
                </div>
            </div>

           <Footer/>
        </div>
    );
}

export default AboutUS;
