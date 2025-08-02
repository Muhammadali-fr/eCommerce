
import { Save } from "lucide-react"
import { Image } from "lucide-react"
import { User } from "lucide-react"

export default function UserSettings() {

    return (
        <div className="w-[990px] h-screen flex flex-col gap-5 py-5">
            <div className="w-full flex items-center justify-between ">
                <div className="flex flex-col ">
                    <p className="text-[20px]">Your profile</p>
                    <p className="text-[16px] text-gray-600">Lest edit 1 August 2025</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <button className="border py-2 px-3 rounded-md text-[16px] text-red-600 cursor-pointer border border-red-600 bg-red-100 hover:bg-red-200">discart</button>
                    <button className="border py-2 px-3 rounded-md text-[16px] text-white flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 cursor-pointer"><Save size={16} /> Save</button>
                </div>
            </div>
            {/* Profi Picture */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-violet-600">
                    <Image size={25} strokeWidth={1.75} />
                    <p className="text-[16px] text-black">Profi Picture</p>
                </div>
                <div className="flex items-center  justify-start gap-5">
                    <div className="w-30 h-30 cursor-pointer">
                        <img className="rounded-full " src="/assets/default-user.png" alt="img" />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <button className="bg-violet-600 text-[16px] text-white py-2 px-3 rounded-md hover:bg-violet-500 cursor-pointer">Change picture</button>
                        <button className="border border-red-600 bg-red-100 text-[16px] text-red-600 py-2 px-3 rounded-md hover:bg-red-200 cursor-pointer">Delete picture</button>
                    </div>
                </div>
            </div>
            {/* Personal Information */}
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-violet-600">
                    <User size={25} strokeWidth={1.75} />
                    <p className="text-[16px] text-black">Personal Information</p>
                </div>
                <form className="">
                    <div className="">
                        <label className="w-full ">
                            <p className="text-[16px] text-gray-600 cursor-pointer">First Name</p>
                            <input className="p-2 border border-gray-400 rounded-lg" type="text" />
                        </label>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-start">
                <div className="border border-gray-400 rounded-lg p-3 flex items-center justify-between gap-5">
                    <div>
                        <p className="text-[16px]">Lorem ipsum dolor sit amet consectetur</p>
                        <p className="max-w-[300px] text-[10px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, neque!</p>
                    </div>
                    <div>
                        switch
                    </div>
                </div>
            </div>
        </div>
    )
}