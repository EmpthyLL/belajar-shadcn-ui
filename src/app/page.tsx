"use client"

import Calendar from "@/components/calender/calender";
import General from "@/components/general/general";
import Chart from "@/components/line/chart";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <General/>
        <div className="grid gap-5">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid mt-5 grid-cols-3 gap-5">
        <Chart/>
        <Chart/>
        <Chart/>
      </div>
    </div>
  );
}
