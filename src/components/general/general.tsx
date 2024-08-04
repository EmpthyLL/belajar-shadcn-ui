'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MyResponsiveBump } from ".";
import { dataBumps } from "@/lib/data";

export default function General() {

    return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>This Week</CardTitle>
        <CardDescription>These are the number of sales done this week.</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <MyResponsiveBump data={dataBumps}/>
      </CardContent>
    </Card>
    );
}