"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getProfile } from "../api/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/feature/userSlice";
import { RootState } from "../store/store";

export default function StoreUser() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const storeUserInfo = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const resetToken = localStorage.getItem("resetToken");

      if (!accessToken) {
        router.push("/auth/login");
        return;
      }

      if (!user) {
        try {
          setLoader(true);
          const res = await getProfile({ token: accessToken });
          dispatch(setUser(res));
        } catch (error) {
          console.error("Error fetching profile:", error);
          router.push("/auth/login");
        } finally {
          setLoader(false);
        }
      }
    };

    storeUserInfo();
  }, [dispatch, router, user]);

  if (loader) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-between bg-white text-white z-100 py-10">
        <span></span>
        <img className="w-[120px] h-[120px] rounded-full" src="/assets/logo.png" alt="logo" />
        <p>Nuna</p>
      </div>
    );
  }

  return null;
}
