
// react 
import React from "react";

// components 
import Sidebar from "./components/Sidebar";

export default function UserLayout({children} : {children: React.ReactNode}) {
    return (
        <div className="flex items-center">
            <Sidebar/>
            {children}
        </div>
    )
}