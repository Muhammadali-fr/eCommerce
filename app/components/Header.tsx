"use client"
// Link
import Link from "next/link"

// lucide 
import { Search, ShoppingCart } from "lucide-react"

export default function Header() {
    return (
        <div className="py-2 border-b border-[#e8e7e5] bg-gray-100">
            <div className="max-w-[990px] w-[90%] mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <img className="w-[50px] h-[50px] select-none" src="/assets/logo.png" alt="logo" />
                    </Link>
                    <p className="text-2xl text-black font-semibold">Round</p>
                </div>

                <ul className="flex items-center text-gray-600">
                    <li className="border-b border-black px-2 cursor-pointer">
                        <Link href={"/"}>home</Link>
                    </li>

                    <li className="border-b border-white hover:border-black px-2 cursor-pointer">
                        <Link href={"/"}>shop</Link>
                    </li>

                    <li className="border-b border-white hover:border-black px-2 cursor-pointer">
                        <Link href={"/"}>login</Link>
                    </li>
                </ul>

                <ul className="flex items-center gap-3 text-sm text-gray-500">
                    <li><Search/></li>
                    <li><ShoppingCart/></li>
                </ul>
            </div>
        </div>
    )
}