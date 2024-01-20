"use client"
import { colors } from "@/config"
import {
  Bar,
  BarChart,
  Legend,
  LegendProps,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { barData as data } from "@/config"

import { cn } from "@/lib/utils"

function CustomTooltip({ payload, label, active }: any) {
  if (active) {
    return (
      <div className="border rounded-xl p-2 backdrop-blur-sm flex flex-col gap-2 text-foreground">
        <span className="text-center">{label}</span>
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

const AxisTick = ({ x, y, payload }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        className="font-thin text-[10px] sm:text-sm"
      >
        {payload.value}
      </text>
    </g>
  )
}

const CustomLegend = ({ payload }: LegendProps) => {
  return (
    <ul className="text-foreground flex justify-center gap-8 list-disc">
      {payload?.map((entry, i) => {
        const { color } = entry
        return (
          <li
            key={`item-${i}`}
            className={cn(
              "marker:text-xl marker:[text-shadow:0_0_50px_black] text-sm",
              i
                ? "marker:text-[color:var(--custom-list-marker2)]"
                : "marker:text-[color:var(--custom-list-marker1)]"
            )}
            style={{
              // @ts-expect-error works and shouldnt yell
              "--custom-list-marker1": payload[0].color,
              "--custom-list-marker2": payload[1].color,
            }}
          >
            {entry.value}
          </li>
        )
      })}
    </ul>
  )
}

const BarChartComponent = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            className="stroke-foreground"
            // stroke="black"
            tick={AxisTick}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke={colors.main.primary}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke={colors.main.secondary}
          />
          <Tooltip content={CustomTooltip} cursor={{ fill: "transparent" }} />
          <Legend
            verticalAlign="top"
            height={42}
            iconType="circle"
            // @ts-expect-error - the type in component works just fine
            content={CustomLegend}
          />
          <Bar yAxisId="left" dataKey="Aktywnych" fill={colors.main.primary} />
          <Bar
            yAxisId="right"
            dataKey="Nieaktywnych"
            fill={colors.main.secondary}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent
