"use client"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarItemProps {
  item: {
    name: string
    path: string
    icon: LucideIcon
  }
  orientation?: "left" | "right"
}

export default function SidebarItem({ item, orientation }: SidebarItemProps) {
  const pathname = usePathname()
  return (
    <li className="w-full">
      <Link
        href={item.path}
        className={cn(
          "flex items-center gap-4 rounded-sm text-muted-foreground hover:text-primary hover:bg-primary/20 py-2 px-4 w-full transition-colors",
          {
            "text-primary": pathname === item.path,
            "flex-row-reverse": orientation === "right",
          }
        )}
      >
        <item.icon className="w-6 h-6" />
        <span className="">{item.name}</span>
      </Link>
    </li>
  )
}
