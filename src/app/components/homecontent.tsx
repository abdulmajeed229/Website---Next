

import React from "react";

function HomeCenter() {
    return (
        <div className=" HomeContentCenter h-[90vh] w-full  bg-no-repeat bg-cover bg-center flex justify-start items-center p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
                    Save a Life. <br /> Donate Blood
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-4">
                    One pint of blood can save a life
                </h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-5 pt-6">
                    <button className="h-12 w-full md:w-52 lg:w-60 bg-orange-500 text-white font-light text-lg md:text-base py-2 px-4 rounded">
                        Make Appointment
                    </button>
                    <button className="h-12 w-full md:w-52 lg:w-60 bg-white text-black font-light text-lg md:text-base py-2 px-4 rounded">
                        <strong>Call us +92 3112484573</strong>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomeCenter;
