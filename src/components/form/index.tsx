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
import { useEffect, useState } from "react";
import axios from "axios";

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
  month: z.string(),
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

async function getData() {
  const data = await axios.get("http://localhost:3005/team");
  return data;
}
async function postData(memberData) {
  const data = await axios.post("http://localhost:3005/team", memberData);
  return data;
}

export default function AddMemberForm() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData();
        setMembers(res);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const bgList = [
    "#eab308",
    "#10b981",
    "#06b6d4",
    "#ef4444",
    "#a855f7",
    "#f97316",
    "#f1f5f9",
  ];
  function getBGcolor(role: string) {
    if (role === "Admin") {
      return bgList[0];
    } else if (role === "Digital Artist") {
      return bgList[1];
    } else if (role === "Programmer") {
      return bgList[2];
    } else if (role === "Game Developer") {
      return bgList[3];
    } else if (role === "UI/UX Designer") {
      return bgList[4];
    } else if (role === "Data Scientist") {
      return bgList[5];
    } else {
      return bgList[6];
    }
  }
  function getRoleID(role: string) {
    if (role === "Admin") {
      return "adm";
    } else if (role === "Digital Artist") {
      return "digart";
    } else if (role === "Programmer") {
      return "prog";
    } else if (role === "Game Developer") {
      return "gmdev";
    } else if (role === "UI/UX Designer") {
      return "ui-ux";
    } else if (role === "Data Scientist") {
      return "dtsct";
    } else {
      return "oth";
    }
  }
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      role: "",
    },
  });

  async function addMember(data: any) {
    const newData = {
      email: data.email,
      username: data.username,
      role: data.role || "Others",
      roleid: getRoleID(data.role),
      bgColor: getBGcolor(data.role),
      status: "",
      statusid: "",
    };
    const res = await postData(newData);
    setMembers(res);
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
                    type="text"
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
                  <Input
                    {...field}
                    id="email"
                    placeholder="Email"
                    type="email"
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
