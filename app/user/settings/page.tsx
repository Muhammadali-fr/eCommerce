"use client"

import { useState } from "react";
import { RootState } from "@/app/store/store"
import { useSelector } from "react-redux"
import ButtonLoader from "@/app/components/ButtonLoader";

export default function UserSettings() {

    // input infos 
    const [userProfile, setUserProfile] = useState<string | null>(null);
    const [bio, setBio] = useState("");

    // loaders 
    const [photoLoader, setPhotoLoader] = useState(false);
    const user = useSelector((state: RootState) => state.user.user);

    const handleChangePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            alert("please choose image");
        }

        setPhotoLoader(true);

        const url = URL.createObjectURL(file);
        setUserProfile(url);
        setTimeout(() => {
            setPhotoLoader(false);
        }, 1000)
    }

    return (
        <div className="w-[800px] min-h-[90vh] mx-auto flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Account Information</h1>

            <div className="p-5 border border-gray-200 rounded-3xl bg-white">


                {/* update photo  */}
                <div className="w-full  flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <img className="w-[60px] h-[60px] rounded-full object-center object-cover" src={userProfile ? userProfile : "/assets/default-user.png"} alt="user-profile" />
                        <div>
                            <p className="font-semibold">{user ? user.name : "username"}</p>
                        </div>
                    </div>

                    <label className="w-[180px] h-[40px] flex items-center justify-center bg-violet-700 text-white rounded-lg cursor-pointer hover:bg-violet-500">
                        {photoLoader ? <ButtonLoader /> : "change photo"}
                        <input onChange={handleChangePhoto} className="hidden" type="file" />
                    </label>
                </div>

            </div>


            {/* gender update  */}

        </div>
    )
}