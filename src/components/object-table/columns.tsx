"use client"

import { tableObject } from "@/config"
import { cn, getIconFromType } from "@/lib/utils"
import { Column, ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { Button } from "../ui/button"

export const columns: ColumnDef<unknown, tableObject>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <HeaderCell name="ID" column={column} />,
    cell: ({ row }) => <div className="text-center">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <HeaderCell name="Nazwa" column={column} />,
  },
  {
    accessorKey: "type",
    header: ({ column }) => <HeaderCell name="Typ" column={column} />,
    cell: ({ row }) => (
      <div className="flex gap-8">
        <span className="text-muted-foreground">
          {getIconFromType(row.getValue("type"))}
        </span>
        {row.getValue("type")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <HeaderCell name="Data utworzenia" column={column} />
    ),
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {format(row.getValue("date"), "MM/dd/yyyy", { locale: pl })}
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <HeaderCell name="Status" column={column} />,
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <span
          className={cn("py-1 px-2 rounded-full", {
            "text-red-400 bg-red-400/20": status === "ERROR",
            "text-green-400 bg-green-400/20": status === "OK",
          })}
        >
          {status as string}
        </span>
      )
    },
  },
]

function HeaderCell({
  column,
  name,
}: {
  column: Column<unknown, Object>
  name: string
}) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {name}
    </Button>
  )
}
