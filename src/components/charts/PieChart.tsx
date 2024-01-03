"use client"
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

import { pieData as data } from "@/config"

function CustomTooltip({ payload, label, active }: any) {
  if (active) {
    return (
      <div className="border rounded-xl p-2 backdrop-blur-sm flex flex-col gap-2">
        <div className="flex gap-2 items-center text-foreground">
          <div
            className="w-4 h-4 rounded-full border"
            style={{ background: payload[0].fill }}
          />
          Obiektów: {payload[0].value}
        </div>
      </div>
    )
  }

  return null
}

export default function PieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Tooltip content={CustomTooltip} cursor={{ fill: "transparent" }} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
