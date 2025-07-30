
import { Minus } from "lucide-react"
import { Plus } from "lucide-react"
import { Trash2 } from "lucide-react"
export default function Cart() {

    return (
        <div className="w-[90%] max-w-[990px] mx-auto flex items-start justify-between py-3 gap-1">
            <div className="w-[69%] rounded-xl border p-5">
                <div className="flex items-center justify-between pb-3">
                    <p className="text-[20px] font-semibold text-gray-600 flex gap-2 items-center justify-end">Cart <span className="text-[14px]">(3 products)</span></p>
                    <p className="text-[16px] text-red-500 flex gap-2 cursor-pointer hover:text-red-400"> clear cart</p>
                </div>
                <div className="flex flex-col gap-3">
                    {/* cart ========= */}

                    <div className="flex items-center justify-between py-2 px-2 border border-gray-200 rounded-xl">
                        <div className="w-25 h-25 rounded-lg overflow-hidden">
                            <img className="w-full object-cover" src="./assets/cart.png" alt="img" />
                        </div>
                        <p className="text-[15px] text-gray-600 max-w-[250px]">Iphone nechidir  Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className="flex items-center justify-between gap-3 ">
                            <button className="p-2 cursor-pointer rounded-full border hover:bg-gray-200"><Minus size={18} className="text-gray-600" /></button>
                            <p className="text-[16px] text-gray-600">1</p>
                            <button className="p-2 cursor-pointer rounded-full border hover:bg-gray-200"><Plus size={18} className="text-gray-600" /></button>
                        </div>
                        <div className="flex items-center justify-centrer gap-3">
                            <p className="text-[16px] text-gray-600 font-bold cursor-pointer">$370.00</p>
                            <div className="p-2 border rounded-full  text-red-500 cursor-pointer">
                                <Trash2 size={20} />
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
            <div className="w-[30%] bg-gray-100 py-3 px-3 rounded-xl flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="text-[16px] text-gray-600">Subtotal</p>
                        <p className="text-[16px] text-gray-600">$999.000</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[16px] text-gray-600">Discound</p>
                        <p className="text-[16px] text-gray-600">$999.000</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[16px] text-black">Total</p>
                        <p className="text-[16px] text-black">$999.000</p>
                    </div>
                </div>
                <button className="w-full bg-violet-700 py-2 rounded-md text-[16px] text-white cursor-pointer hover:bg-violet-600">Prodect to checkout</button>
            </div>
        </div>
    )
}