
// react-router-dom 
import Link from "next/link"

export default function Login() {
    return (
        <div className="w-full h-screen flex items-center">

            {/* logo  */}
            <Link href={"/"}>
                <img className="absolute top-5 left-5 w-[50px] h-[50px] rounded-full" src="/assets/logo.png" alt="logo" />
            </Link>

            {/* left  */}
            <div className="w-full md:w-[50%] h-screen flex items-center justify-center ">
                <div className="w-[90%] max-w-[400px] text-gray-700 space-y-3">


                    <h1 className="text-4xl md:text-5xl font-bold text-black">Welcome back</h1>
                    <p>Log in to your acconct</p>
                    <button className="flex items-center justify-center w-full gap-2 text-gray-700 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 py-2">
                        <img className="w-[20px] h-[20px]" src="/assets/google.svg" alt="google" />
                        Log in with Google
                    </button>

                    <div className="w-full flex items-center justify-between gap-2">
                        <div className="w-full h-[1px] bg-gray-400"></div>
                        <p>OR</p>
                        <div className="w-full h-[1px] bg-gray-400"></div>
                    </div>

                    <form className="flex flex-col gap-3">
                        {/* email  */}
                        <label className="flex flex-col gap-0.5">
                            <p className="text-sm">Email</p>
                            <input autoFocus className="p-2 border border-gray-400 rounded-lg" type="text" />
                        </label>

                        {/* password  */}
                        <label className="flex flex-col gap-0.5">
                            <p className="text-sm">Password</p>
                            <input className="p-2 border border-gray-400 rounded-lg" type="text" />
                        </label>
                        <Link className="text-sm text-blue-700 underline" href="/forgot-password">Forgot password?</Link>

                        <button className="w-full bg-[#4c64d9] hover:bg-[#4c80d9] text-white text-center py-2 rounded-lg cursor-pointer">Log in</button>
                    </form>

                    <p className="text-sm">Don't have an account? <Link className="text-blue-700 underline" href={"/auth/register"}>Sign up</Link></p>

                    <div className="w-full h-[1px] bg-gray-400"></div>

                    <p className="text-sm">By logging in you agree to our <Link className="text-blue-700 underline" href={"/terms"}>terms</Link> and have read the <Link className="text-blue-700 underline" href={"/privacy"}>privacy policy</Link></p>

                </div>
            </div>

            {/* right  */}
            <div className="hidden md:block w-[50%] h-screen bg-gray-300">
                <img className="w-full h-full object-top object-cover" src="/assets/bg.png" alt="background-image" />
            </div>

        </div>
    )
}