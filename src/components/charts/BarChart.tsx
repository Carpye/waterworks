"use client"
import { colors } from "@/config"
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { barData as data } from "@/config"

function CustomTooltip({ payload, label, active }: any) {
  if (active) {
    return (
      <div className="border rounded-xl p-2 backdrop-blur-sm flex flex-col gap-2 text-foreground">
        <div className="flex gap-2 items-center">
          <div
            className="w-4 h-4 rounded-full border"
            style={{ background: payload[0].fill }}
          />
          Aktywnych: {payload[0].value}
        </div>
        <div className="flex gap-2 items-center">
          <div
            className="w-4 h-4 rounded-full border"
            style={{ background: payload[1].fill }}
          />
          Nieaktywnych: {payload[1].value}
        </div>
      </div>
    )
  }

  return null
}

const BarChartComponent = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke={colors.primary} />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke={colors.secondary}
          />
          <Tooltip content={CustomTooltip} cursor={{ fill: "transparent" }} />
          <Legend />
          <Bar yAxisId="left" dataKey="Aktywnych" fill={colors.primary} />
          <Bar yAxisId="right" dataKey="Nieaktywnych" fill={colors.secondary} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent
