"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  CircleUserRound,
  PackageSearch,
  ChartLine,
  LogOut,
  ArrowLeftToLine
} from "lucide-react"

const navItems = [
  { label: "Edit Profile", href: "/user/settings", icon: CircleUserRound },
  { label: "Products", href: "/user/products", icon: PackageSearch },
  { label: "Charts", href: "/user/charts", icon: ChartLine },
  { label: "Home", href: "/", icon: ArrowLeftToLine },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between px-4 py-6 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-6 px-2">
        <img src="/assets/logo.png" alt="logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-gray-800">Round</span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all
                ${isActive
                  ? "bg-violet-600 text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-violet-600"
                }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <button className="flex items-center gap-2 justify-center bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded-md transition">
        <LogOut size={18} />
        Log Out
      </button>
    </aside>
  )
}
