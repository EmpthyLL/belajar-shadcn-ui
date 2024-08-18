import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import AddMemberForm from "../form";
export default function DialogForm({ postData }) {
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
        <AddMemberForm postData={postData} />
      </DialogContent>
    </Dialog>
  );
}
