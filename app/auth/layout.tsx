"use client"

import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useRouter } from "next/navigation";

export default function AuthLayout({children}: {children: React.ReactNode}){
    const router = useRouter()
        
    const user = useSelector((state: RootState) => state.user.user);
    const token = localStorage.getItem("accessToken");
    if(token && user){
        router.push("/");
    }

    return(
        <div>
            {children}
        </div>
    )
}