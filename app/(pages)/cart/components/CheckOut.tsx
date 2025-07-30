export default function CheckOut() {
    return (
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
    )
}