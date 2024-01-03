import React from "react"
import ToggleThemeButton from "./ToggleThemeButton"
import { Separator } from "./ui/separator"
import SidebarButton from "./SidebarButton"

const PageHeading = ({ name }: { name: string }) => {
  return (
    <>
      <div className="flex justify-between items-center p-8 max-w-[1920px] self-center w-full">
        <span className="text-2xl text-foreground font-semibold">{name}</span>
        <div className="flex gap-4">
          <ToggleThemeButton className={"hidden sm:flex"} />
          <SidebarButton />
        </div>
      </div>
      <Separator className="" />
    </>
  )
}

export default PageHeading
