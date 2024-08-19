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
import { Plus, SquarePen } from "lucide-react";
import AddMemberForm from "../form/addMember";
import ChangeMemberForm from "../form/dataChange";
export default function UpdateDialog({ postData }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="p-1">
          <SquarePen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Member</DialogTitle>
          <DialogDescription>
            Click Add Member after filling the form
          </DialogDescription>
        </DialogHeader>
        <ChangeMemberForm postData={postData} />
      </DialogContent>
    </Dialog>
  );
}
