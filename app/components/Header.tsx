"use client"
// Link
import Link from "next/link"

// lucide 
import { Search } from "lucide-react"

export default function Header() {
    return (
        <div className="py-3">
            <div className="max-w-[990px] w-[90%] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[50px] h-[50px] select-none" src="/assets/logo.png" alt="logo" />
                </Link>

                <label className="flex items-center gap-3 border border-gray-300 py-1 px-2 rounded-sm text-gray-500">
                    <input placeholder="search..." className="outline-none text-gray-600" type="text" />
                    <Search />
                </label>

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

                    <li className="border-b border-white hover:border-black px-2 cursor-pointer">
                        <Link href={"/"}>cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}