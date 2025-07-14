
"use client"

// router 
import { useRouter } from "next/navigation";

// react 
import { useEffect, useState } from "react";
import { getProfile } from "../api/services/auth";

export default function StoreUser() {
    const router = useRouter();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const storeUserInfo = async () => {

            // checking token...
            const accessToken = localStorage.getItem("accessToken");
            const resetToken = localStorage.getItem("resetToken");
            if (!accessToken) {
                router.push("/auth/login");
                return;
            }

            try {
                setLoader(true);
                let res = await getProfile(accessToken);
                console.log(res, "storeUser componenet");
                
            } catch (error) {
                console.log(error);
                alert("error storeUser component")
            }finally{setLoader(false)}

        }

        storeUserInfo()
    }, [])

    return null
}