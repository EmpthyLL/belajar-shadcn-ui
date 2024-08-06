"use client"

import { useState } from "react";
import Header from "../header";
import Sidebar from "../sidebar";

export default function Navigations({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [expand, setExpand] = useState(true)
    function menuHandler(){
        setExpand(!expand)
    }
    return (       
        <>
        <div className={`bg-white fixed z-10 transition-transform ${expand ? 'sidebar-open' : 'sidebar-closed'} sidebar-transition min-w-[300px]`}>
            <Sidebar/>
        </div>
        <main className={`mb-5 w-full h-full ${expand ? 'main-open' : 'main-closed'} main-transition`}>
            <div className={`bg-white fixed z-10 top-0 right-0 left-0 transition-transform ${expand ? 'header-open' : 'header-closed'} header-transition`}>
                <Header menuHandler={menuHandler}/>
            </div>
            <div className="p-5 mt-20">
                {children}
            </div>
        </main>
        </> 
    );
}