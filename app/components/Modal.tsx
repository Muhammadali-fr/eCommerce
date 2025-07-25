import { X } from "lucide-react"

export default function Modal({ show, onClose, children } : {show: any, onClose: any, children: any}) {
    if (!show) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur">

            {/* inside box  */}
            <div className="bg-white max-w-[400px] h-[200px] w-[95%] rounded-lg flex item-center justify-between flex-col overflow-hidden p-2">

                {/* box head  */}
                <div className="flex items-center justify-between p-2">
                    <div></div>

                    <div onClick={onClose} className="p-1 rounded-full bg-[#e5e5e5] border border-gray-300 hover:bg-gray-200 cursor-pointer">
                        <X size={15} color="black" />
                    </div>
                </div>

                {/* box body  */}
                {children}

                {/* box footer 
                <div className="w-full p-2 bg-[#f5f5f5]">
                    <button className="w-full bg-[#e5e5e5] hover:bg-white rounded-lg py-1.5 font-semibold cursor-pointer" onClick={onClose}>close</button>
                </div> */}
            </div>

            <div onClick={onClose} className="fixed top-5 right-5 p-2 cursor-pointer ">
                <X color="white" />
            </div>

        </div>
    )

}