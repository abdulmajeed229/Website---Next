"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { auth } from '@/Database/firebase.config';
import { useRouter } from 'next/navigation';

function LoginMyAccount() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential: any) => {
                const user = userCredential.user;
                localStorage.setItem('user', 'true');
                alert("Login Success");
                router.push('/home');
            })
            .catch((error: any) => {
                const errorMessage = error.message;
                alert(errorMessage);
                <Link href={'/login'}></Link>
            });
    }

    return (
        <div className="loginImg min-h-screen w-full bg-cover bg-center flex items-center justify-center" >
            <div className="flex flex-col items-center w-full max-w-md p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-6">Login</h1>

                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-12 w-full px-3 border-b border-orange-200 outline-none rounded mb-4"
                />

                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-12 w-full px-3 border-b border-orange-200 outline-none rounded mb-4"
                />

                <button
                    onClick={handleLogin}
                    className="h-12 w-full bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition-colors"
                >
                    Login Account
                </button>

                <div className="flex gap-20 mt-5 justify-evenly">

                    <Link href={'/'}> <button >Create account</button></Link>
                   
                    <button>Forget Password</button>
                </div>
            </div>
        </div>
    );
}

export default LoginMyAccount;
