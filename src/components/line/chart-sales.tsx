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
import { dataChartSales } from "@/lib/data";

export default function ChartSales() {
    return (
        <Card>
            <CardHeader>Sales</CardHeader>
            <CardDescription className="px-4">These are the sales done this month.</CardDescription>
            <CardContent className="h-[250px] flex items-center w-full">
                <MyResponsiveLine data={dataChartSales} chartMode={'basis'} scheme={'nivo'}/>
            </CardContent>
        </Card>
    );
}