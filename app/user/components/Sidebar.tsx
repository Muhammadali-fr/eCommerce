"use client"

// pathname 
import { usePathname } from "next/navigation";

// lucide 
import { CircleUserRound, PackageSearch, ChartLine, LogOut, ArrowLeftToLine } from "lucide-react";

// link 
import Link from "next/link"

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <div className="min-w-[250px] w-[250px] h-screen bg-gray-100 p-3 flex flex-col border-r border-gray-300">

            <Link href={"/"}>
                <div className="flex items-center justify-center">
                    <img className="w-[60px] h-[60px]" src="/assets/logo.png" alt="logo" />
                    <p className="text-2xl font-semibold">Round</p>
                </div>
            </Link>

            <div className="w-full h-[1px] bg-gray-300"></div>

            <ul className="py-5 flex flex-col gap-1 flex-1">
                <li>
                    <Link className={`flex items-center text-gray-700 gap-1  p-2.5 rounded-lg hover:bg-violet-300 ${pathname === "/user/settings" && "bg-violet-600 text-white hover:bg-violet-500"}`} href={"/user/settings"}>
                        <CircleUserRound />
                        edit profile
                    </Link>
                </li>

                <li>
                    <Link className={`flex items-center text-gray-700 gap-1  p-2.5 rounded-lg hover:bg-violet-300 ${pathname === "/user/products" && "bg-violet-600 hover:bg-violet-500 text-white"}`} href={"/user/products"}>
                        <PackageSearch />
                        products
                    </Link>
                </li>

                <li>
                    <Link className={`flex items-center text-gray-700 gap-1  p-2.5 rounded-lg hover:bg-violet-300 ${pathname === "/user/charts" && "bg-violet-600 hover:bg-violet-500 text-white"}`} href={"/user/charts"}>
                        <ChartLine />
                        charts
                    </Link>
                </li>

                <li>
                    <Link className={`flex items-center text-gray-700 gap-1  p-2.5 rounded-lg hover:bg-violet-300 ${pathname === "/" && "bg-violet-600 hover:bg-violet-500 text-white"}`} href={"/"}>
                        <ArrowLeftToLine />
                        home page
                    </Link>
                </li>
            </ul>

            <button className="flex items-center justify-center cursor-pointer hover:bg-red-500 w-full py-2.5 bg-red-600 text-white rounded-lg gap-2">
                <LogOut />
                log out
            </button>
        </div>
    )
}