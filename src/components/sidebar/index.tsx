'use client'

import { Bell, CreditCard, Inbox, Link, MessageSquare, Settings, ShieldCheck, User } from "lucide-react";
import UserItem from "../user-item";
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
        <div className="w-[300px] fixed gap-2 flex flex-col border-r min-h-screen p-4 min-w-[300px]">
            <div>
                <UserItem/>
            </div>
            <div className="grow">
            <Command className="overflow-visible">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className="overflow-visible">
                <CommandEmpty>No results found.</CommandEmpty>
                {menuList.map((menu, key) => {
                    return (menu.items ? <>
                        <CommandGroup key={key} heading={menu.group}>
                            {
                                menu.items.map((item, key) => <CommandItem key={key} className="flex gap-2 cursor-pointer">{item.icon}{item.text}</CommandItem>)
                            }
                        </CommandGroup>
                        <CommandSeparator />
                    </> : null)
                })}
            </CommandList>
            </Command>
            </div>
            <div className="text-sm text-gray-600">Settings/Notifications</div>
        </div>
    );
}