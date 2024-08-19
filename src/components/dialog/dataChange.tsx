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
export default function UpdateDialog({ memberid, postData }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="p-1">
          <SquarePen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Data Member</DialogTitle>
          <DialogDescription>
            Click Update Data after filling the form
          </DialogDescription>
        </DialogHeader>
        <ChangeMemberForm memberid={memberid} postData={postData} />
      </DialogContent>
    </Dialog>
  );
}
