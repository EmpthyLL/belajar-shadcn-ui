import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const roles = [
  "Admin",
  "Digital Artist",
  "Programmer",
  "Game Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Others",
];

export default function RoleSelection({
  onChange,
  memberRole,
}: {
  onChange: (value: string) => void;
}) {
  return (
    <Select name="role" value={memberRole} onValueChange={onChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {roles.map((role, key) => (
            <SelectItem key={key} value={role}>
              {role}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
