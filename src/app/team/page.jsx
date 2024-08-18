"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OctagonAlert, Trash2 } from "lucide-react";
import UserItem from "useritem";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import axios from "axios";
import SearchInput from "@/components/search";
import DialogForm from "@/components/dialog";

async function getData() {
  try {
    const res = await axios.get("http://127.0.0.1:3005/team");
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
async function postData(memberData) {
  try {
    const res = await axios.post("http://127.0.0.1:3005/team", memberData);
    return res.data.members;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function Team() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const bgList = [
  //   "#eab308",
  //   "#10b981",
  //   "#06b6d4",
  //   "#ef4444",
  //   "#a855f7",
  //   "#f97316",
  //   "#f1f5f9",
  // ];
  // function getBGcolor(role) {
  //   if (role === "Admin") {
  //     return bgList[0];
  //   } else if (role === "Digital Artist") {
  //     return bgList[1];
  //   } else if (role === "Programmer") {
  //     return bgList[2];
  //   } else if (role === "Game Developer") {
  //     return bgList[3];
  //   } else if (role === "UI/UX Designer") {
  //     return bgList[4];
  //   } else if (role === "Data Scientist") {
  //     return bgList[5];
  //   } else {
  //     return bgList[6];
  //   }
  // }
  // const members = [
  //   {
  //     email: "sarapang12@gmail.com",
  //     username: "Sarakuapa",
  //     role: "Admin",
  //     roleid: "adm",
  //     bgcolor: getBGcolor("Admin"),
  //     online: true,
  //   },
  //   {
  //     email: "johna39@gmail.com",
  //     username: "Johanana",
  //     role: "Digital Artist",
  //     roleid: "digart",
  //     bgcolor: getBGcolor("Digital Artist"),
  //     online: false,
  //   },
  //   {
  //     email: "tommasap03@gmail.com",
  //     username: "Tommatoo",
  //     role: "Programmer",
  //     roleid: "prog",
  //     bgcolor: getBGcolor("Programmer"),
  //     online: true,
  //   },
  //   {
  //     email: "devarasa1@gmail.com",
  //     username: "Devamana",
  //     role: "Game Developer",
  //     roleid: "gmdev",
  //     bgcolor: getBGcolor("Game Developer"),
  //     online: false,
  //   },
  //   {
  //     email: "ivanasar@gmail.com",
  //     username: "Ivana",
  //     role: "UI/UX Designer",
  //     roleid: "ui-ux",
  //     bgcolor: getBGcolor("UI/UX Designer"),
  //     online: false,
  //   },
  //   {
  //     email: "lolala23@gmail.com",
  //     username: "Lololala",
  //     role: "Data Scientist",
  //     roleid: "dtsct",
  //     bgcolor: getBGcolor("Data Scientist"),
  //     online: true,
  //   },
  //   {
  //     email: "farhantamasta@gmail.com",
  //     username: "Farhan Semesta",
  //     role: "Others",
  //     roleid: "oth",
  //     bgcolor: getBGcolor("Others"),
  //     online: false,
  //     status: "Pending",
  //     statusid: "pend",
  //   },
  //   {
  //     email: "ekamasararu45@gmail.com",
  //     username: "Masararu",
  //     role: "Others",
  //     roleid: "oth",
  //     bgcolor: getBGcolor("Others"),
  //     online: true,
  //   },
  // ];
  useEffect(() => {
    async function loadMembers() {
      try {
        const data = await getData();
        console.log(data);
        setMembers(data);
      } catch (error) {
        setError("Failed to fetch members");
      } finally {
        setLoading(false);
      }
    }
    loadMembers();
  }, []);

  async function sendData(member) {
    async function loadMembers() {
      try {
        setLoading(true);
        const data = await postData(member);
        setMembers(data);
      } catch (error) {
        setError("Failed to send data member");
      } finally {
        setLoading(false);
      }
    }
    loadMembers();
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid gap-4">
      <header>
        <h2 className="text-3xl font-[700]">Team Setting</h2>
      </header>
      <div className="grid gap-4">
        <div className="flex items-center justify-between gap-4">
          <SearchInput type="text" placeholder="Search a team member..." />
          <DialogForm postData={sendData} />
        </div>
      </div>
      <div className="border rounded-md">
        {members.length === 0 ? (
          <Alert>
            <OctagonAlert className="pr-2" />
            <AlertTitle>No Users Currently</AlertTitle>
            <AlertDescription>
              There is no members added yet to this form!
            </AlertDescription>
          </Alert>
        ) : (
          members.map((member, key) => (
            <div
              className="grid grid-cols-6 pr-4 items-center justify-between border-b last:border-0"
              key={key}
            >
              <div className="lg:col-span-2 col-span-5">
                <UserItem
                  name={member.username}
                  description={member.email}
                  shadow={false}
                  border={false}
                  backgroundColor={member.bgcolor}
                  online={member.online}
                />
              </div>
              <div className="col-span-3 lg:flex hidden gap-5">
                <Badge className={`tag ${member.roleid}`}>{member.role}</Badge>
                {member.status && (
                  <Badge className={`tag ${member.statusid}`}>
                    {member.status}
                  </Badge>
                )}
              </div>
              <div className="col-span-1 md:flex hidden justify-end">
                <Button variant={"ghost"}>
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
