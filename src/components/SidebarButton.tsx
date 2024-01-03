"use client"
import React from "react"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import ToggleThemeButton from "./ToggleThemeButton"
import SidebarItem from "./SidebarItem"
import { sidebarItems } from "@/config"

const SidebarButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"} className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="!max-w-[250px]">
        <div className="flex flex-col h-full items-center justify-between pt-8">
          <ul className="flex flex-col gap-8">
            {sidebarItems.map((item, i) => (
              <SidebarItem item={item} key={i} />
            ))}
          </ul>
          <ToggleThemeButton className="flex sm:hidden self-end" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarButton
