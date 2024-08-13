'use client'

import { Bell, CreditCard, Inbox, MessageSquare, Settings, ShieldCheck, User } from "lucide-react";
import UserItemCustom from "../user-item";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Suspense } from "react";
import LoadingMenu from "./loading";
import UserItem from "useritem"
import Link from "next/link";

export default function Sidebar() {
    const menuList = [
        {
            group: 'General',
            items:[
                {
                    link:'/',
                    text:'Profile',
                    icon:<User/>

                },
                {
                    link:'/',
                    text:'Inbox',
                    icon:<Inbox />
                },
                {
                    link:'/',
                    text:'Billing',
                    icon:<CreditCard />
                },
                {
                    link:'/',
                    text:'Notifications',
                    icon:<Bell />
                },
            ]
        },
        {
            group: 'Settings',
            items:[
                {
                    link:'/',
                    text:'General Settings',
                    icon:<Settings />
                },
                {
                    link:'/',
                    text:'Privacy',
                    icon:<ShieldCheck/>
                },
                {
                    link:'/',
                    text:'Logs',
                    icon:<MessageSquare />
                },
            ]
        },
    ]
    return (
        <div className={`gap-2 flex flex-col min-h-screen p-4 border-r`}>
            <div>
                <UserItemCustom/>
                {/* <UserItem
                    name='Sarah Pangestia'
                    description='sarapang12@gmail.com'
                    shadow={false}
                    avatarUrl='SP.png'
                    online={true}
                /> */}
            </div>
            <div className="grow">
            <Command className="overflow-visible">
            <CommandList className="overflow-visible">
                {menuList.map((menu, key) => {
                    return (menu.items ? <div key={key} >
                        <CommandGroup heading={menu.group}>
                            {
                                menu.items.map((item, key) => <CommandItem key={key} className="flex gap-2 cursor-pointer">{item.icon}{item.text}</CommandItem>)
                            }
                        </CommandGroup>
                        <CommandSeparator />
                    </div> : null)
                })}
            </CommandList>
            </Command>
            </div>
            <div className="text-sm text-gray-600">
                <Link href='/team' className="flex items-center gap-2">
                <Settings />
                <span>Team Settings</span>
                </Link>
            </div>
        </div>
    );
}