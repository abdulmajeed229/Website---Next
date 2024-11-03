import Link from "next/link";

function Footer() {

    
    return (
        <footer className="min-h-[70px] w-full bg-black text-white p-4 sm:p-5 lg:p-6 font-light">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <span className="text-sm sm:text-base">© 2019 Transport. All rights reserved</span>
                
                <ul className="flex flex-col sm:flex-row justify-start gap-4 mt-4 sm:mt-0">
              
    
    <Link href={'/privacy-policy'}>  <li className="hover:underline cursor-pointer">Privacy Policy</li></Link>
                  
                    <li className="hover:underline cursor-pointer">Site Map</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
