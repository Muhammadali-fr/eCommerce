
import Link from "next/link";
import { HashLoader } from "react-spinners"; // Importing the HashLoader for loading animation

export default function VerifyAccount() {
  return (
    <div className="w-full h-screen flex items-center">

      {/* logo  */}
      <Link href={"/"}>
        <img className="absolute top-5 left-5 w-[50px] h-[50px] rounded-full" src="/assets/logo.png" alt="logo" />
      </Link>

      {/* left  */}
      <div className="w-full md:w-[50%] h-screen flex items-center justify-center ">
        <div className="w-[90%] max-w-[420px] bg-white border border-gray-200 text-gray-800 rounded-xl p-8 flex flex-col items-center space-y-5">
          <h1 className="text-2xl font-semibold text-center"> Verifying your account...</h1>
          {/* Loader */}
          <HashLoader color="#6D28D9" size={50} />
          <p className="text-sm text-gray-500 text-center">
            Please don’t close this window until loading ends.
          </p>
        </div>
      </div>

      {/* right  */}
      <div className="hidden md:block w-[50%] h-screen bg-gray-300">
        <img className="w-full h-full object-top object-cover" src="/assets/bg.png" alt="background-image" />
      </div>

    </div>
  );
}
