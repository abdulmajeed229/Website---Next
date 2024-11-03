"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Database/firebase.config";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Donors() {
    const [donor, setDonors] = useState([]);
    const [loading, setLoading] = useState(true); 

    
    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "userData"));
                const donorsData = [];
                querySnapshot.forEach((doc) => {
                    donorsData.push({ id: doc.id, ...doc.data() });
                });
                setDonors(donorsData);
                setLoading(false);
                console.log(donorsData);
            } catch (error) {
                console.error("Error fetching donors:", error);
                setLoading(false);
            }
        };

        fetchDonors();
    }, []); 

    return (
        <div>
            <Navbar />
            <div className="p-5 flex min-h-[100vh] w-full flex-wrap justify-center gap-5" >
                {
                loading ? (
                    <p>Loading donors...</p> 
                ) : donor.length > 0 ? (
                    donor.map((donor) => (
                        <div key={donor.id} className=" mt-5 shadow-2xl p-4 border-b w-[280px] min-h-[350px] rounded-xl  transform transition duration-800 hover:scale-105 cursor-pointer">
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="user" className="h-[100px]" />
                            <br />
                            <div className="flex flex-col justify-center gap-2">

                            <h1 className="text-[20px] font-medium font-serif">{donor.name}</h1>
                            <p>Email: {donor.email}</p>
                            <p>Phone: {donor.number}</p>
                            <p>Blood Group : {donor.bloodGroup}</p>
                            <p>Gender : {donor.gender}</p>
                            <p>Age : {donor.age}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No donors found</p> 
                )}
            </div>

            <Footer/>
        </div>
    );
}

export default Donors;
