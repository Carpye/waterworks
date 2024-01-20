import React from "react"
import ToggleThemeButton from "./ToggleThemeButton"
import { Separator } from "./ui/separator"
import SidebarButton from "./SidebarButton"

const PageHeading = ({ name }: { name: string }) => {
  return (
    <>
      <div className="flex xl:justify-between gap-8 items-center p-8 max-w-[1920px] self-center w-full border-b">
        <div className="flex gap-4 xl:hidden">
          <SidebarButton />
        </div>
        <span className="text-2xl text-foreground font-semibold">{name}</span>
        <div className="flex gap-4 max-xl::hidden">
          <ToggleThemeButton className={"hidden xl:flex"} />
        </div>
      </div>
    </>
  )
}

export default PageHeading
