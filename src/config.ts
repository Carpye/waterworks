import { LayoutDashboard, Workflow } from "lucide-react"
import { MarkerType } from "reactflow"

export const colors = {
  main: {
    primary: "#6b70ff",
    secondary: "#adb0ff",
  },
  turquoise: {
    primary: "#00fff2",
    secondary: "#adb0ff",
  },
}

const defaultNodeOptions = {
  type: "customNode",
}

export const defaultEdgeOptions = {
  type: "customEdge",
  data: {
    label: "text",
  },
  label: "text",
  style: {
    stroke: colors.main.primary,
    strokeWidth: 1,
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 15,
    height: 15,
    strokeWidth: 1,
    color: colors.main.primary,
  },
}

export const defaultEdges = [
  {
    id: "reactflow__edge-1-2",
    source: "1",
    target: "2",
  },
  {
    id: "reactflow__edge-1-3",
    source: "1",
    target: "3",
  },
  {
    id: "reactflow__edge-3-2",
    source: "3",
    target: "2",
  },
  {
    id: "reactflow__edge-3-4",
    source: "3",
    target: "4",
  },
  {
    id: "reactflow__edge-4-3",
    source: "4",
    target: "3",
  },
  {
    id: "reactflow__edge-4-5",
    source: "4",
    target: "5",
  },
].map((el) => ({ ...el, ...defaultEdgeOptions }))

export interface DefaultNode {
  id: string
  position: { x: number; y: number }
  data: {
    label: string
    type: "OCZYSZCZALNIA" | "STACJA" | "ZRODLO"
  }
}

export const defaultNodes: DefaultNode[] = [
  {
    id: "1",
    position: { x: -100, y: 0 },
    data: { label: "Oczyszczalnia wielka", type: "OCZYSZCZALNIA" as const },
  },
  {
    id: "2",
    position: { x: 0, y: 200 },
    data: { label: "Źródło czerwone", type: "ZRODLO" as const },
  },
  {
    id: "3",
    position: { x: 200, y: 100 },
    data: { label: "Stacja przesyłowa", type: "STACJA" as const },
  },
  {
    id: "4",
    position: { x: 500, y: 100 },
    data: { label: "Oczyszczalnia mała", type: "OCZYSZCZALNIA" as const },
  },
  {
    id: "5",
    position: { x: 600, y: 200 },
    data: { label: "Źródło zielone", type: "ZRODLO" as const },
  },
].map((el) => ({ ...el, ...defaultNodeOptions }))

export const barData = [
  {
    name: "Źródła",
    Nieaktywnych: 2,
    Aktywnych: 0,
  },
  {
    name: "Stacje",
    Nieaktywnych: 0,
    Aktywnych: 2,
  },
  {
    name: "Oczyszczalnie",
    Nieaktywnych: 0,
    Aktywnych: 2,
  },
]

export const pieData = [
  { name: "Oczyszczalnie", value: 2 },
  { name: "Stacje", value: 1 },
  { name: "Źródła", value: 2 },
]

export const sidebarItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Infrastruktura",
    path: "/infrastruktura",
    icon: Workflow,
  },
]

export type objectType = "OCZYSZCZALNIA" | "ŹRÓDŁO" | "STACJA"

export type tableObject = {
  id: string
  name: string
  type: objectType
  date: Date
  status: "OK" | "ERROR"
}

export const tableData: tableObject[] = [
  {
    id: "1",
    name: "Oczyszczalnia wielka",
    type: "OCZYSZCZALNIA",
    date: new Date("1999-07-11T23:20:21.817Z"),
    status: "OK",
  },
  {
    id: "2",
    name: "Źródła czerwone",
    type: "ŹRÓDŁO",
    date: new Date("2020-05-12T23:50:21.817Z"),
    status: "ERROR",
  },
  {
    id: "3",
    name: "Stacja przemysłowa",
    type: "STACJA",
    date: new Date("2017-02-14T23:53:21.817Z"),
    status: "OK",
  },
  {
    id: "4",
    name: "Oczyszczalnia mała",
    type: "OCZYSZCZALNIA",
    date: new Date("2002-12-12T23:50:21.817Z"),
    status: "OK",
  },
  {
    id: "5",
    name: "Źródła zielone",
    type: "ŹRÓDŁO",
    date: new Date("2021-05-22T23:50:21.817Z"),
    status: "ERROR",
  },
]
