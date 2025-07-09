
// lucide 
import { ChevronRight } from "lucide-react";

// data 
import famousItems from "../../data/data";

export default function Famous() {

    return (
        <div className="max-w-[990px] w-[90%] mx-auto space-y-3 pb-5">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold">Popular</h1>
                <ChevronRight />
            </div>

            {/* item here  */}
            <ul className="grid grid-cols-4 gap-5">
                {
                    famousItems.map((item, id) => (
                        <li key={id} className="w-full h-[400px] rounded-lg overflow-hidden p-2 bg-[#e8e7e5] flex items-center justify-between flex-col">
                            <img className="h-[70%] w-full object-cover object-center rounded-lg" src={item.image} alt={item.description} />
                            <div className="py-2">
                                <p className="font-semibold"><span className="text-violet-950">{item.price}</span> so'm</p>
                                <p className="text-sm text-gray-800 line-clamp-2 leading-snug">{item.description}</p>
                            </div>
                            <button className="w-full py-1.5 bg-violet-700 text-white rounded-lg hover:bg-violet-600 cursor-pointer">Add to Cart</button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}