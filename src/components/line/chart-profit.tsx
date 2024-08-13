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
import { dataChartProfit } from "@/lib/data";

export default function ChartProfit() {
    return (
        <Card>
            <CardHeader>Profit</CardHeader>
            <CardDescription className="px-4">These are the profit earned this month.</CardDescription>
            <CardContent className="h-[250px] flex items-center w-full">
                <MyResponsiveLine data={dataChartProfit} chartMode={'linear'} scheme={'paired'}/>
            </CardContent>
        </Card>
    );
}