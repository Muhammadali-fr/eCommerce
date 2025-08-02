
import { Save } from "lucide-react"
import { Plus } from "lucide-react"
import { Minus } from "lucide-react"
export default function UserSettings() {

    return (
        <div className="flex-grow">
            <div className="w-[60%] py-5 px-5 flex flex-col gap-5 border border-gray-400 rounded-lg">
                <div className="flex items-center justify-between  border border-gray-400 p-2 rounded-lg">
                    <p className="text-[20px]">My Profile</p>
                    <div className="flex items-center justify-center gap-3">
                        <button className="py-2 px-2 border rounded-lg border-gray-400 text-[16px] text-gray-600 hover:bg-gray-100 cursor-pointer">discard</button>
                        <button className="py-2 px-2 border rounded-lg flex items-center justify-center gap-2 text-[16px] text-white bg-violet-600 cursor-pointer hover:bg-violet-500"><Save size={16} />save</button>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 border border-gray-400 p-2 rounded-lg">
                    <img className="w-30 h-30 rounded-full" src="/assets/default-user.png" alt="" />
                    <div className="flex items-center justify-center gap-3">
                        <button className="py-2 px-2 rounded-lg bg-red-100 text-[16px] text-red-500 border border-red-500 flex items-center justify-center gap-1 cursor-pointer hover:bg-red-200"><Minus size={16} />delete picture</button>
                        <button className="py-2 px-2 rounded-lg bg-violet-600 text-[16px] text-white flex items-center justify-center gap-1 cursor-pointer hover:bg-violet-500"><Plus size={16} />change picture</button>
                    </div>
                </div>
                <form className="flex items-end justify-between border border-gray-400 p-2 rounded-lg">
                    <label>
                        <p className="text-[14px] text-gray-600">First Name</p>
                        <input className="p-2 border border-gray-400 rounded-lg text-gray-600" type="text" />
                    </label>
                    <div className="flex items-center justify-center gap-5 border border-gray-400 p-2 rounded-lg">
                        <p className="text-[16px] text-gray-600">Lorem ipsum dolor sit amet.</p>
                        switch
                    </div>
                </form>
            </div>
        </div>
    )
}