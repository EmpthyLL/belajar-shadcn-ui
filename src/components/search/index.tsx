import { Search } from "lucide-react";

export default function SearchInput({type,placeholder}:any) {
    return (
        <div className="border border-b-2 bor rounded-lg flex w-full items-center px-2">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input type={type} placeholder={placeholder} className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"/>
        </div>
    );
}