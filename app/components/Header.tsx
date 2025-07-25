"use client"
// Link
import Link from "next/link"

// lucide 
import { Search, Settings, ShoppingCart, User } from "lucide-react"

// navigation 
import { usePathname } from "next/navigation"
import path from "path";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

// popover 
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../components/ui/popover"

export default function Header() {
    const user = useSelector((state: RootState) => state.user.user);
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

                    {!user &&
                        <li className={`font-semibold  cursor-pointer ${pathname === "/login" ? "text-violet-700" : "text-gray-600"}`}>
                            <Link className="px-2" href={"/auth/login"}>login</Link>
                        </li>
                    }

                </ul>

                <ul className="flex items-center gap-3  text-sm text-gray-500">
                    <li><Search /></li>
                    <li><ShoppingCart /></li>

                    {/* user icon  */}
                    {user && <li>
                        <Popover>
                            <PopoverTrigger className="flex items-center-justify-center cursor-pointer">
                                {/* user icon here  */}
                                <User />

                            </PopoverTrigger>
                            <PopoverContent className="mx-5 w-[200px] p-1 rounded-lg">
                                <ul className="flex flex-col m-1 text-[#7a7c7d]">
                                    <li className="flex items-center gap-2 p-2 select-none">
                                        <User size={22} />  {user?.name}
                                    </li>

                                    {/* line  */}
                                    <div className="bg-gray-200 w-full h-[1px] my-1"></div>

                                    <Link href={"/user/settings"}>
                                        <li className="flex items center gap-2 p-2 hover:bg-[#f5f7f9] rounded-lg cursor-pointer select-none">
                                            <Settings size={22} />
                                            Settings
                                        </li>
                                    </Link>
                                </ul>
                            </PopoverContent>
                        </Popover>
                    </li>}
                </ul>
            </div>
        </div>
    )
}