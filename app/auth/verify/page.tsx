"use client";

// links 
import Link from "next/link";

// loaders 
import { HashLoader } from "react-spinners";

// params 
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// fetcher 
import { verifyMagicLink } from "@/app/api/services/auth";

// useEffect 
import { useEffect } from "react";


export default function VerifyAccount() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    const handleVerify = async () => {
      if (!token) {
        router.push("/auth/login");
        return
      }

      try {
        const res: verifyResponse = await verifyMagicLink({ token });
        if (res?.accessToken && res?.resetToken) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("resetToken", res.resetToken);
        } else {
          throw new Error("Missing tokens in response.");
        }
      }
      catch (err) {
        console.error("Verification failed:", err);
        alert("Verification failed. Please try again.");
        // router.push("/auth/login");
      }
    }

    handleVerify();
  }, []);




  return (
    <div className="w-full h-screen flex items-center">

      {/* left  */}
      <div className="w-full md:w-[50%] h-screen flex items-center justify-center ">
        <div className="w-[90%] max-w-[420px] bg-white border border-gray-200 text-gray-800 rounded-xl p-5  space-y-5">
          <div className="flex items-center">
            <img className="w-[80px] h-[80px] rounded-full" src="/assets/logo.png" alt="logo" />
            <p className="text-2xl font-semibold">Round</p>
          </div>
          <h1 className="text-2xl font-semibold"> Verifying your account...</h1>
          {/* Loader */}
          <HashLoader color="#6D28D9" size={50} />
          <p className="text-sm text-gray-500">
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
