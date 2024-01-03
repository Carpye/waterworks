import { objectType, tableObject } from "@/config"
import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { Droplets, Factory, RefreshCw, Waves } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIconFromType(type: objectType) {
  switch (type) {
    case "OCZYSZCZALNIA":
      return <RefreshCw />

    case "STACJA":
      return <Factory />

    case "ŹRÓDŁO":
      return <Waves />

    default:
      return <Droplets />
  }
}

export function globalFilterFn(
  row: any,
  globalFilter: string,
  dateFilter: boolean
) {
  let found = false
  const values: (string | Date)[] = Object.values(row.original as tableObject)
  values.forEach((value) => {
    if (typeof value === "string") {
      if (value.toLocaleLowerCase().includes(globalFilter)) found = true
    }
    if (dateFilter && value instanceof Date) {
      console.log("checking for date")

      if (
        format(value, "MM/dd/yyyy", {
          locale: pl,
        }).includes(globalFilter)
      )
        found = true
    }
  })

  return found
}
