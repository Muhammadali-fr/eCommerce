
import { Trash2 } from "lucide-react"
import { Minus } from "lucide-react"
import { Plus } from "lucide-react"
import { ShieldCheck } from "lucide-react"
export default function Cart() {

    return (
        <div className="w-[90%] max-w-[990px] mx-auto px-4">
            <p className="text-[34px] font-bold text-left py-2">Shopping cart</p>
            <div className="w-full flex flex-col justify-between gap-5">

                <div className="w-[100%]">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between gap-6">
                            <input className="scale-150 cursor-pointer" type="checkbox" name="" id="" />
                            <p className="shrink-0 text-[18px] font-bold">Select all variations (1)</p>
                            <span className="w-[100%] h-[2px] bg-[#dddddd]"></span>
                        </div>
                        <div className="flex items-center gap-6">
                            <input className="scale-150 cursor-pointer" type="checkbox" name="" id="" />
                            <p className="shrink-0 text-[18px] font-bold">Shenzhen Boer Epoxy Co. Ltd</p>
                        </div>
                        <div className="w-full flex gap-6 ">
                            <div className="flex items-center justify-center">
                                <input className="scale-150 cursor-pointer" type="checkbox" name="" id="" />
                            </div>
                            <div className="w-40  border border-[1px] rounded-lg">
                                <img className="w-full h-full rounded-lg object-cover cursor-pointer shrink-0" src="./assets/phone.png" alt="photo" />
                            </div>
                            <div className="w-[80%] py-1 flex flex-col gap-1">
                                <div className="w-[100%] flex justify-between">
                                    <p className="text-[16px] font-bold max-w-[550px] cursor-pointer">Anti-Shock Clear Anti-Yellow I Phone Cases Luxury Wholesale Matte Tpu Luxury Cell Phone Cases for Iphones 16 15 14 13 Pro Max</p>
                                    <div className="cursor-pointer">
                                        <Trash2 className="w-6 h-6 text-[#666666] hover:text-[#413c39]" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img className="w-5 h-5" src="./assets/c.png" alt="photo" />
                                    <span className="w-[2px] h-[2px] bg-[#837c8c] rounded-full"></span>
                                    <p className="text-[15px]"> Estimated delivery by Aug 14-Aug 18</p>
                                    <span className="w-[2px] h-[2px] bg-[#837c8c] rounded-full"></span>
                                    <p className="text-[15px]">1950 sold recently</p>
                                </div>
                                <p className="text-[15px]">Min. order: <span> 10 pieces</span></p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-5 bg-white  border-t border-b">
                                        <button className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[#e6e6e6] cursor-pointer"><Minus className="w-5 h-5 text-[#333333]" /></button>
                                        <p className="text-[16px] font-bold">1</p>
                                        <button className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[#e6e6e6] cursor-pointer"><Plus className="w-5 h-5 text-[#333333]" /></button>
                                    </div>
                                    <p className="text-[18px] font-bold cursor-pointer">UZS 34,443.16</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-end">
                            <div className="w-[96%] bg-[#f4f4f4] flex items-center justify-between gap-7 py-3 rounded-lg">
                                <div>
                                    <input className="scale-150 cursor-pointer" type="checkbox" name="" id="" />
                                </div>
                                <img className="w-12" src="./assets/subPhone.png" alt="" />
                                <div>
                                    <p className="text-[18px] font-bold">UZS 34,443.16</p>
                                    <Trash2 className="w-6 h-6 text-[#666666] hover:text-[#413c39]" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="bg-white shadow-md p-7 rounded-xl w-[50%] flex flex-col gap-3">
                        <p className="text-[18px] font-bold">Order summary (1 variations)</p>
                        <div className="flex flex-col gap-3 py-3 border-b">
                            <div className="flex items-center justify-between">
                                <p className="text-[16px]">Item subtotal</p>
                                <p className="text-[18px] font-bold">UZS 34,443.16</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[16px]">Shipping fee</p>
                                <p className="text-[18px] font-bold">UZS 515,634.37</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[16px] font-bold">Subtotal excl. tax</p>
                            <p className="text-[18px] font-bold">UZS 515,634.37</p>
                        </div>
                        <button className="bg-[#4c64d9] rounded-4xl flex items-center justify-center text-white gap-2 py-3 text-[18px] cursor-pointer hover:bg-[#4c80d9]"><ShieldCheck /> Check out</button>
                        <div className="flex flex-col gap-4">
                            <p className="text-[16px] font-bold">You are protected on Round.com</p>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-6 text-[#22891f]" />
                                    <p className="text-[16px]">Secure payment</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-[25px] h-[20px] flex items-center justify-center"><img className="w-[25px] h-[20px] object-cover" src="./assets/payment-1.png" alt="" /></span>
                                        <span className="w-[25px] h-[20px] flex items-center justify-center"><img className="w-[25px] h-[20px] object-cover" src="./assets/payment-2.png" alt="" /></span>
                                        <span className="w-[25px] h-[20px] flex items-center justify-center"><img className="w-[25px] h-[20px] object-cover" src="./assets/payment-3.png" alt="" /></span>
                                        <span className="w-[25px] h-[20px] flex items-center justify-center"><img className="w-[25px] h-[20px] object-cover" src="./assets/payment-4.png" alt="" /></span>
                                        <span className="w-[25px] h-[20px] flex items-center justify-center"><img className="w-[25px] h-[20px] object-cover" src="./assets/payment-5.png" alt="" /></span>
                                        <span className="w-[25px] h-[20px] flex items-center justify-center"><img className="w-[25px] h-[20px] object-cover" src="./assets/payment-6.png" alt="" /></span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-6 text-[#22891f]" />
                                    <p className="text-[16px]">Refund and returns</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-6 text-[#22891f]" />
                                    <p className="text-[16px]">Fulfillment by Round.com Logistics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}