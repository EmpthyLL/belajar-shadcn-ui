'use client'

export default function UserItem() {
    return (
        <div className="flex items-center justify-between py-2 px-4 gap-2 border rounded-[8px] bg-secondary">
            <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                <p>SP</p>
            </div>
            <div>
                <p className="text-xl font-semibold">Sarah Pangestia</p>
                <p className="text-sm text-gray-400">sarapang12@gmail.com</p>
                <p>Designer</p>
            </div>
        </div>
    );
}