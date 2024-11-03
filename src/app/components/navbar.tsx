import React, { useState } from "react";
import Link from "next/link";

function Navbar() {


    function UserClose() {

        alert("Are you sure you want to close the session?");
    }




    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        <nav className="text-black">
            <div className="h-[70px] w-full bg-white flex justify-between items-center px-4 sm:px-6 md:px-8 sticky scroll-m-0 top-0">

                <ul className="hidden lg:flex gap-10 cursor-pointer text-[13px] justify-center items-center">

<Link href={'/home'}>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEzjXpulUKSG1T_5ZB9o-oxdnvekDTVj4it5pNmnXMf0ZRfEIZ2FZSQrfHtd7Yv0zVaE&usqp=CAU" alt="logo"className="h-[70px] w-[150px]" />
</Link>
               
                <Link href={'/home'}><li>HOME</li></Link>
              
                              

                    <Link href={'/donors'}><li>DONORS</li></Link>
             
                
    
                    <Link href={'/about-us'}>  <li>ABOUT US</li></Link>
                    <Link href={'/contact'}> <li>CONTACTS</li></Link>

                    
                
             
                </ul>

                <span>&#128269;</span>

                <button
                    className="lg:hidden flex items-center"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            <div
                className={`fixed inset-0 bg-white z-50 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    } lg:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        className="text-xl"
                        onClick={toggleMobileMenu}
                    >
                        &times;
                    </button>
                </div>
                <ul className="flex flex-col items-center">

                    <Link href={'/home'}><li className="py-4">HOME</li></Link>
                    <Link href={'/donors'}><li className="py-4">DONORS</li></Link>
                    <Link href={'/about-us'}><li className="py-4">ABOUT US</li></Link>
                    <Link href={'/contact'}><li className="py-4">CONTACTS</li></Link>
                    {/* <li className="py-4"><button className="bg-orange-400 h-[33px] w-[80px] text-white">DONATE</button></li> */}
                    <li className="py-4" ><button onClick={UserClose} className="bg-orange-400 h-[33px] w-[80px] text-white">SIGN OUT</button></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
