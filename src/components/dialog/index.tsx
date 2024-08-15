import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import RoleSelection from "../select";
import AddMemberForm from "../form";
export default function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="flex justify-center items-end">
          <Plus /> Add Members
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Member</DialogTitle>
          <DialogDescription>
            Click Add Member after filling the form
          </DialogDescription>
        </DialogHeader>
        <AddMemberForm />
      </DialogContent>
    </Dialog>
  );
}
