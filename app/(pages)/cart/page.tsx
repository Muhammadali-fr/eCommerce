
// lucide icons 
import { Minus } from "lucide-react"
import { Plus } from "lucide-react"
import { Trash2 } from "lucide-react"

// components 
import CheckOut from "./components/CheckOut"

// link 
import Link from "next/link"

export default function Cart() {

    return (
        <div className="w-[90%] max-w-[990px] mx-auto flex items-start justify-between py-3 gap-1">
            <div className="w-[69%] rounded-xl border p-5 space-y-3">

                {/* Cart top  */}
                <div className="flex items-center justify-between">
                    <p className="text-[20px] font-semibold text-gray-600 flex gap-2 items-center justify-end">Cart <span className="text-[14px]">(3 products)</span></p>
                    <p className="text-[16px] text-red-500 flex gap-2 cursor-pointer hover:text-red-400 underline"> clear cart</p>
                </div>

                <div className="w-full h-[1px] bg-gray-200"></div>

                {/* Cart bottom  */}
                <div className="flex flex-col gap-3">
                    {/* cart  */}
                    <div className="flex items-center justify-between rounded-xl">

                        {/* cart image  */}
                        <div className="w-[80px] h-[80px] rounded-lg overflow-hidden bg-gray-200">
                            <img className="w-full h-full object-cover object-center" src="/assets/f.png" alt="image" />
                        </div>

                        {/* name  */}
                        <Link href={"/"}>
                            <p className="max-w-[230px] font-semibold text-gray-600 line-clamp-2 leading-snug">Ayollar va erkaklar uchun bir rangdagi futbolka.</p>
                        </Link>

                        {/* cart quantity buttons */}
                        <div className="flex items-center justify-center gap-3 ">
                            <button className="p-2 cursor-pointer rounded-full border hover:bg-gray-200"><Minus size={18} className="text-gray-600" /></button>
                            <p className="text-[16px] text-gray-600">1</p>
                            <button title="add one same product" className="p-2 cursor-pointer rounded-full border hover:bg-gray-200"><Plus size={18} className="text-gray-600" /></button>
                        </div>

                        <p className="min-w-[100px] flex items-center justify-center font-bold text-gray-700"><span>17 000</span></p>

                        <div title="delete" className="p-2 border rounded-full text-red-500 cursor-pointer hover:bg-red-100">
                            <Trash2 size={20} />
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-200"></div>

                    <div className="flex items-center justify-between rounded-xl">

                        {/* cart image  */}
                        <div className="w-[80px] h-[80px] rounded-lg overflow-hidden bg-gray-200">
                            <img className="w-full h-full object-cover object-center" src="/assets/k.png" alt="image" />
                        </div>

                        {/* name  */}
                        <Link href={"/"}>
                            <p className="max-w-[230px] font-semibold text-gray-600 line-clamp-2 leading-snug">Ayollar va erkaklar uchun bir rangdagi futbolka.</p>
                        </Link>

                        {/* cart quantity buttons */}
                        <div className="flex items-center justify-center gap-3 ">
                            <button className="p-2 cursor-pointer rounded-full border hover:bg-gray-200"><Minus size={18} className="text-gray-600" /></button>
                            <p className="text-[16px] text-gray-600">1</p>
                            <button title="add one same product" className="p-2 cursor-pointer rounded-full border hover:bg-gray-200"><Plus size={18} className="text-gray-600" /></button>
                        </div>

                        <p className="min-w-[100px] flex items-center justify-center font-bold text-gray-700"><span>374 000</span></p>

                        <div title="delete" className="p-2 border rounded-full text-red-500 cursor-pointer hover:bg-red-100">
                            <Trash2 size={20} />
                        </div>
                    </div>

                </div>
            </div>

            {/* checkout  */}
            <CheckOut />
        </div>
    )
}