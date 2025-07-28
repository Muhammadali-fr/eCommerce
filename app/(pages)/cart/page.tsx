
import { Trash2 } from "lucide-react"

export default function Cart() {

    return (
        <div className="w-[90%] max-w-[990px] mx-auto">
            <p className="text-[34px] font-bold text-left py-2">Shopping cart</p>
            <div className="w-full flex">

                <div className=" w-[80%] ">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center justify-between gap-6 py-3">
                            <input className="scale-175 cursor-pointer" type="checkbox" name="" id="" />
                            <p className="shrink-0 text-[18px] font-bold">Select all variations (1)</p>
                            <span className="w-[100%] h-[2px] bg-[#dddddd]"></span>
                        </div>
                        <div className="flex items-center gap-6">
                            <input className="scale-175 cursor-pointer" type="checkbox" name="" id="" />
                            <p className="shrink-0 text-[18px] font-bold">Shenzhen Boer Epoxy Co. Ltd</p>
                        </div>
                        <div className="w-full flex gap-6 ">
                            <div className="flex items-center justify-center">
                                <input className="scale-175 cursor-pointer" type="checkbox" name="" id="" />
                            </div>
                            <div className="w-38 h-38 border border-[1px] rounded-lg">
                                <img className="w-full h-full rounded-lg object-cover cursor-pointer shrink-0" src="./assets/phone.png" alt="photo" />
                            </div>
                            <div className="w-[80%] py-1 flex flex-col gap-1">
                                <div className="w-[100%] flex justify-between">
                                    <p className="text-[16px] font-bold max-w-[550px] cursor-pointer">Anti-Shock Clear Anti-Yellow I Phone Cases Luxury Wholesale Matte Tpu Luxury Cell Phone Cases for Iphones 16 15 14 13 Pro Max</p>
                                    <div className="cursor-pointer">
                                        <Trash2 />
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
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="w-[95%] bg-[#f4f4f4] flex items-center">
                                <div>
                                    <input className="scale-175 cursor-pointer" type="checkbox" name="" id="" />
                                </div>
                                <img className="w-15" src="./assets/subPhone.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>

            </div>
        </div>
    )
}