'use client'

import { BellDot, BellIcon, Menu } from "lucide-react";
import { CommandBar } from "../command";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { read } from "fs";
import { Item } from "@radix-ui/react-dropdown-menu";
import { Skeleton } from "../ui/skeleton";

export default function Header() {
    const [notifications, setNotifications] = useState([
        {
            tittle: 'Notif 1',
            text: 'This is notification',
            date: '03-06-2020',
            read: true
        },
        {
            tittle: 'Notif 2',
            text: 'This is another notification',
            date: '03-06-2020',
            read: false
        },
        {
            tittle: 'Notif 3',
            text: 'This is another not so important notification',
            date: '03-06-2020',
            read: true
        },
    ])
    // function ReadHandler(key:number){
    //     const newNotifications = notifications
    //     newNotifications[key].read = true
    //     setNotifications(newNotifications)
    //     console.log(newNotifications)
    // }
    function ReadHandler(key: number) {
        const newNotifications = notifications.map((notif, index) => 
        index === key ? { ...notif, read: true } : notif
        );
        setNotifications(newNotifications);
    }
    return (
        <div className="gap-4 grid grid-cols-2 items-center border-b p-4">
            <div className="flex gap-2 items-center">
            <Button variant={'outline'}><Menu /></Button>
            <CommandBar/>
            </div>
            <div className="flex justify-end">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {/* <Button variant="outline" size='icon'>
                        {notifications.find(nof => nof.read === false) ? <BellDot className="w-4 h-4"/> : <BellIcon className="w-4 h-4"/>}
                    </Button> */}
                    <Button variant="outline" className="relative" size='icon'>
                        <BellIcon className="w-4 h-4"/>
                        <div className={`min-h-2 min-w-2 absolute top-0 right-0 mt-1 mr-1 ${notifications.find(nof => nof.read === false) ? 'bg-slate-700' : 'bg-slate-0'} rounded-full`} ></div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            notifications.map((notif,key) => 
                                <DropdownMenuItem onClick={() => ReadHandler(key)} key={key} className="flex gap-2 p-1 hover:bg-secondary items-center justify-between transition cursor-pointer">
                                    <Skeleton className="min-w-12 min-h-12 rounded-full"/>
                                    <div>
                                        <div className="flex pr-4 justify-start gap-2 items-center">
                                        <h2 className="font-semibold">{notif.tittle}</h2>
                                        <p className="text-xm pr-16 font-light text-slate-500">({notif.date})</p>
                                        </div>
                                        <p className="truncate max-w-56 text-gray-500">{notif.text}</p>
                                    </div>
                                    <div className={`min-w-3 min-h-3 rounded-full ${notif.read ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                </DropdownMenuItem>
                            )
                        }
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}