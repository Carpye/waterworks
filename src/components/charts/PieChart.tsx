"use client";
import {
  Cell,
  Legend,
  LegendProps,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { colors, pieData as data } from "@/config";
import { cn } from "@/lib/utils";

const chartColors = [
  colors.main.primary,
  colors.main.secondary,
  "#644FFF",
].reverse();

function CustomTooltip({ payload, active }: any) {
  if (active) {
    return (
      <div className="border rounded-xl p-2 backdrop-blur-sm flex flex-col gap-2">
        <span className="text-center">{payload[0].name}</span>
        <div className="flex gap-2 items-center text-foreground">
          <div
            className="w-4 h-4 rounded-full border"
            style={{ background: payload[0].payload.fill }}
          />
          Obiektów: {payload[0].value}
        </div>
      </div>
    );
  }

  return null;
}

const CustomLegend = ({ payload }: LegendProps) => {
  return (
    <ul className="text-foreground flex justify-center gap-8 list-disc">
      {payload?.map((entry, i) => {
        const { color } = entry;
        return (
          <li
            key={`item-${i}`}
            className={cn(
              "marker:text-xl marker:[text-shadow:0_0_50px_black] text-sm",
              i === 0
                ? "marker:text-[color:var(--custom-list-marker1)]"
                : i === 1
                ? "marker:text-[color:var(--custom-list-marker2)]"
                : "marker:text-[color:var(--custom-list-marker3)]"
            )}
            style={{
              // @ts-expect-error works and shouldnt yell
              "--custom-list-marker1": payload[0].color,
              "--custom-list-marker2": payload[1].color,
              "--custom-list-marker3": payload[2].color,
            }}
          >
            {entry.value}
          </li>
        );
      })}
    </ul>
  );
};

// type xd<T extends string> = {
//   [K in T]: number
// }

// * wanted to create type for that but tbh I don't know how to set it up

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  value,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      stroke="none"
      fontSize={14}
    >
      {value}
    </text>
  );
};

export default function PieChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="85%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          label={renderCustomizedLabel}
          labelLine={false}
          className=" stroke-background"
          paddingAngle={10}
          startAngle={0}
          endAngle={180}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartColors[index]} />
          ))}{" "}
        </Pie>
        <Tooltip content={CustomTooltip} cursor={{ fill: "transparent" }} />
        <Legend
          verticalAlign="top"
          // @ts-expect-error should work
          content={(payload) => <CustomLegend {...payload} />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
