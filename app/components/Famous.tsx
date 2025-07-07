
// lucide 
import { ChevronRight } from "lucide-react";

export default function Famous() {
    return (
        <div className="max-w-[990px] w-[90%] mx-auto space-y-3">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold">Popular</h1>
                <ChevronRight />
            </div>

            {/* item here  */}
            <ul className="grid grid-cols-4 gap-5">
                <li className="w-full h-[400px] rounded-lg overflow-hidden p-2 bg-[#e8e7e5]">
                    <img className="h-[70%] w-full object-cover object-center rounded-lg" src="/assets/f.png" alt="image" />
                    <div className="py-2 space-y-1">
                        <p className="font-semibold">39 000</p>
                        <p className="text-sm text-gray-800">Erkaklar va ayollar uchun bir xil rangdagi futbolka ,100% paxta</p>
                        <button className="w-full py-1.5 bg-violet-700 text-white rounded-lg hover:bg-violet-600 cursor-pointer">Add to Cart</button>
                    </div>
                </li>
            </ul>

        </div>
    )
}