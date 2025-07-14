"use client"

// react-router-dom 
import Link from "next/link"

// react
import { useState } from "react"

// fetcher 
import { registerUser } from "@/app/api/services/auth";

// Loader
import ButtonLoader from "@/app/components/ButtonLoader";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loader, setLoader] = useState(false)

    // register function 
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Please fill in all fields");
            return;
        };

        try {
            setLoader(true);
            const res = await registerUser({ name, email });
            console.log("Registration response:", res);
            alert("Registration successful! Please check your email to verify your account.");
        }
        catch (err) {
            console.error("Registration failed:", err);
            alert("Registration failed. Please try again.");
        } finally {
            setLoader(false);
        };
    }

    return (
        <div className="w-full h-screen flex items-center">

            {/* logo  */}
            <Link href={"/"}>
                <img className="absolute top-5 left-5 w-[50px] h-[50px] rounded-full" src="/assets/logo.png" alt="logo" />
            </Link>

            {/* left  */}
            <div className="w-full md:w-[50%] h-screen flex items-center justify-center ">
                <div className="w-[90%] max-w-[400px] text-gray-700 space-y-3">

                    <h1 className="text-4xl md:text-5xl font-bold text-black">Welcome</h1>
                    <p>Sign up to your acconct</p>
                    {/* mail  */}
                    <a href="https://mail.google.com/">
                        <button type="button" className="flex items-center justify-center w-full gap-2 text-gray-700 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 py-2 mb-3">
                            <img className="w-[20px] h-[20px]" src="/assets/gmail.png" alt="mail" />
                            Open Mail
                        </button>
                    </a>

                    <div className="w-full flex items-center justify-between gap-2">
                        <div className="w-full h-[1px] bg-gray-400"></div>
                        <p>OR</p>
                        <div className="w-full h-[1px] bg-gray-400"></div>
                    </div>

                    <form onSubmit={handleRegister} className="flex flex-col gap-3">

                        {/* name  */}
                        <label className="flex flex-col gap-0.5">
                            <p className="text-sm">Name</p>
                            <input value={name} onChange={e => setName(e.target.value)} autoFocus className="p-2 border border-gray-400 rounded-lg" type="text" />
                        </label>

                        {/* email  */}
                        <label className="flex flex-col gap-0.5">
                            <p className="text-sm">Email</p>
                            <input value={email} onChange={e => setEmail(e.target.value)} className="p-2 border border-gray-400 rounded-lg" type="text" />
                        </label>

                        <button type="submit" className="w-full h-[42px] bg-[#4c64d9] hover:bg-[#4c80d9] text-white text-center rounded-lg cursor-pointer flex items-center justify-center">{loader ? <ButtonLoader /> : "Log in"}</button>
                    </form>

                    <p className="text-sm">Have an account? <Link className="text-blue-700 underline" href={"/auth/login"}>Login</Link></p>

                    <div className="w-full h-[1px] bg-gray-400"></div>

                    <p className="text-sm">By signing up you agree to our <Link className="text-blue-700 underline" href={"/terms"}>terms</Link> and have read the <Link className="text-blue-700 underline" href={"/privacy"}>privacy policy</Link></p>

                </div>
            </div>

            {/* right  */}
            <div className="hidden md:block w-[50%] h-screen bg-gray-300">
                <img className="w-full h-full object-top object-cover" src="/assets/bg.png" alt="background-image" />
            </div>

        </div>
    )
}