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
import axios from "axios";
import { useEffect, useState } from "react";

async function getData(key) {
  try {
    const res = await axios.get(`http://127.0.0.1:3005/team/${key}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  role: z
    .enum([
      "Admin",
      "Digital Artist",
      "Programmer",
      "Game Developer",
      "UI/UX Designer",
      "Data Scientist",
      "Others",
    ])
    .default("Others"),
});

const bgList = [
  "#eab308",
  "#10b981",
  "#06b6d4",
  "#ef4444",
  "#a855f7",
  "#f97316",
  "#f1f5f9",
];
function getBGcolor(role) {
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
function getRoleID(role) {
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

export default function ChangeMemberForm({ memberid, postData }) {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(memberid);
      setCurrentData(data[0]);
    }
    fetchData();
  }, [memberid]);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      role: "",
    },
  });

  async function ChangeData(data) {
    const member = {
      email: data.email,
      username: data.username,
      role: data.role,
      roleid: getRoleID(data.role),
      bgColor: getBGcolor(data.role),
      status: "",
      statusid: "",
    };

    try {
      console.log(member);
      await postData(member);
    } catch (error) {
      console.error("Error adding member:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(ChangeData)}
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
                    value={(currentData && currentData.username) || ""}
                    id="username"
                    placeholder="Username"
                    required
                    type="text"
                  />
                </FormControl>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div></div>
                <FormMessage className="col-span-3" />
              </div>
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
          Update Data
        </Button>
      </form>
    </Form>
  );
}
