"use client"

import Calendar from "@/components/calender/calender";
import { DataTableDemo } from "@/components/data-table";
import General from "@/components/general/general";
import Chart from "@/components/line/chart";
import { ChartShadcn } from "@/components/line/chart-shad";
import { TableDemo } from "@/components/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div>
      <div className="grid xl:grid-cols-2 gap-5">
        <General />
        <div className="grid gap-5">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid mt-5 xl:grid-cols-2 gap-5 ">
        <Chart/>
        <ChartShadcn/>
      </div>
      <div className="mt-5 gap-5 grid xl:grid-cols-2">
      <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>These are the order of sales done this week.</CardDescription>
          </CardHeader>
          <CardContent>
          <TableDemo/>
          </CardContent>
        </Card>
      <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>These are the order of sales done this week.</CardDescription>
          </CardHeader>
          <CardContent>
          <DataTableDemo/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
