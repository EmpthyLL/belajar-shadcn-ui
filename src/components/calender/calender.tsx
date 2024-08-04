"use client"

import { getRandomDataForYear } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MyResponsiveCalendar } from ".";

export default function Calendar() {
    const dataCalender = getRandomDataForYear(365,'2023')
    return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the targets of sales done this year.</CardDescription>
      </CardHeader>
      <CardContent className="h-[160px] flex items-center w-full">
        <MyResponsiveCalendar data={dataCalender} year="2023"/>
      </CardContent>
    </Card>
    );
}