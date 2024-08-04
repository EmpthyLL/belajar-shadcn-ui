'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function UserItem() {
    return (
        <div className="flex items-center justify-between py-2 px-4 gap-2 border rounded-[8px] bg-secondary">
            {/* <div className="avatar rounded-full min-h-14 min-w-14 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                <p>SP</p>
            </div> */}
            <Avatar className="w-14 h-14">
            <AvatarImage src="SP.png"></AvatarImage>
            <AvatarFallback className="text-lg bg-emerald-500 text-white">SP</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-xl font-semibold">Sarah Pangestia</p>
                <p className="text-sm text-gray-400">sarapang12@gmail.com</p>
                <p>Designer</p>
            </div>
        </div>
    );
}