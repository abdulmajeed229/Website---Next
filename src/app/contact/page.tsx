"use client"

import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Contact() {


    return (
        <div className="min-h-[100vh] w-full">

            <Navbar />


            <div className="ContactImage h-[300px] w-full bg-cover bg-center flex justify-start items-center px-4 sm:px-6 md:px-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold ml-4 sm:ml-6 md:ml-10 lg:ml-20">
                    Contact
                </h1>
            </div>


            <div className="flex flex-col lg:flex-row w-full">

                <div className="p-4 sm:p-6 md:p-8 lg:p-14 flex flex-col gap-6 lg:w-1/2">
                    <div>
                        <h3 className="text-blue-600 text-lg md:text-xl">ADDRESS:</h3>
                        <address className="text-gray-700 text-base md:text-lg">Lorance 542B, Tailstoi Town 5248 MT, United States</address>
                    </div>
                    <span className="text-red-500">______</span>
                    <div>
                        <h3 className="text-blue-600 text-lg md:text-xl">PHONE:</h3>
                        <span className="text-gray-700 text-base md:text-lg">+923112484573<br />+923062040752</span>
                    </div>
                    <span className="text-red-500">______</span>
                    <div>
                        <h3 className="text-blue-600 text-lg md:text-xl">EMAIL:</h3>
                        <span className="text-gray-700 text-base md:text-lg">contact@getforbe.com</span>
                    </div>
                    <span className="text-red-500">______</span>
                    <div>
                        <h3 className="text-blue-600 text-lg md:text-xl">WORKING HOURS:</h3>
                        <span className="text-gray-700 text-base md:text-lg">Monday - Friday: 9:00 am - 6:00 pm</span>
                    </div>
                </div>


                <div className="p-4 sm:p-6 md:p-8 lg:p-14 flex flex-col lg:w-1/2">
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Write a Message</h1>
                    <div className="flex flex-col gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="Your Name*"
                            required
                            className="border border-gray-400 p-3 rounded h-12 w-full sm:w-96"
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            required
                            className="border border-gray-400 p-3 rounded h-12 w-full sm:w-96"
                        />
                        <input
                            type="text"
                            placeholder="Phone*"
                            required
                            className="border border-gray-400 p-3 rounded h-12 w-full sm:w-96"
                        />
                        <textarea
                            placeholder="Message*"
                            required
                            className="border border-gray-400 p-3 rounded h-32 w-full sm:w-96"
                        ></textarea>
                        <button className="h-12 w-full sm:w-96 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors">
                            Join Today
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
