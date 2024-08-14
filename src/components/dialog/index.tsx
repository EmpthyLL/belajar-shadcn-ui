import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
export default function DialogForm() {
    return (
        
        <Dialog>
        <DialogTrigger asChild>
            <Button variant={'outline'} className="flex justify-center items-end"><Plus /> Add Members</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Add Member</DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                username
                </Label>
                <Input
                id="username"
                className="col-span-3"
                required
                placeholder="Username"
                name="username"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                Email
                </Label>
                <Input
                id="username"
                className="col-span-3"
                required
                placeholder="Email"
                name="email"
                />
            </div>
            </div>
            <DialogFooter>
            <Button type="submit">Save changes</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    );
}