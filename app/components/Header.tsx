"use client"
// Link
import Link from "next/link"

// lucide 
import { Search, ShoppingCart } from "lucide-react"

// navigation 
import { usePathname } from "next/navigation"
import path from "path";

export default function Header() {

    const pathname = usePathname();

    return (
        <div className="py-2 border-b border-[#e8e7e5] bg-gray-100">
            <div className="max-w-[990px] w-[90%] mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={"/"} className="flex items-center">
                        <img className="w-[50px] h-[50px] select-none" src="/assets/logo.png" alt="logo" />
                        <p className="text-2xl text-black font-semibold">Round</p>
                    </Link>
                </div>

                <ul className="flex items-center">
                    <li className={`font-semibold  cursor-pointer ${pathname === "/" ? "text-violet-700" : "text-gray-600"}`}>
                        <Link className="px-2" href={"/"}>home</Link>
                    </li>

                    <li className={`font-semibold  cursor-pointer ${pathname === "/shop" ? "text-violet-700" : "text-gray-600"}`}>
                        <Link className="px-2" href={"/shop"}>shop</Link>
                    </li>

                    <li className={`font-semibold  cursor-pointer ${pathname === "/login" ? "text-violet-700" : "text-gray-600"}`}>
                        <Link className="px-2" href={"/auth/login"}>login</Link>
                    </li>
                </ul>

                <ul className="flex items-center gap-3  text-sm text-gray-500">
                    <li><Search /></li>
                    <li><ShoppingCart /></li>
                </ul>
            </div>
        </div>
    )
}