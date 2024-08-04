"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MyResponsiveLine } from ".";
import { dataChart } from "@/lib/data";

export default function Chart() {
    return (
        <Card>
            <CardHeader>Profit</CardHeader>
            <CardDescription className="px-4">These are the profit of sales done this year.</CardDescription>
            <CardContent className="h-[250px] flex items-center w-full">
                <MyResponsiveLine data={dataChart}/>
            </CardContent>
        </Card>
    );
}