"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import RoleSelection from "../select";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Invalid email address.",
    })
    .min(5, {
      message: "Email must be at least 5 characters.",
    }),
  role: z.enum([
    "Admin",
    "Digital Artist",
    "Programmer",
    "Game Developer",
    "UI/UX Designer",
    "Data Scientist",
    "Others",
  ]),
});

export default function AddMemberForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      role: "",
    },
  });

  function addMember(data: any) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(addMember)}
        className="grid grid-cols-1 gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center gap-4">
                <FormLabel>Username</FormLabel>
                <FormControl className="col-span-3">
                  <Input
                    {...field}
                    id="username"
                    placeholder="Username"
                    required
                  />
                </FormControl>
              </div>
              <FormMessage className="col-span-4" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center gap-4">
                <FormLabel>Email</FormLabel>
                <FormControl className="col-span-3">
                  <Input {...field} id="email" placeholder="Email" required />
                </FormControl>
              </div>
              <FormMessage className="col-span-4" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-4 items-center gap-4">
                <FormLabel>Role</FormLabel>
                <FormControl className="col-span-3">
                  <RoleSelection onChange={field.onChange} />
                </FormControl>
              </div>
              <FormMessage className="col-span-4" />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4 justify-self-end">
          Add Member
        </Button>
      </form>
    </Form>
  );
}
