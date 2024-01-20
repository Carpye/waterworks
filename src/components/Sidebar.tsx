"use client"
import { sidebarItems } from "@/config"
import Image from "next/image"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="h-full justify-center border-r relative xl:flex hidden">
      <ul className="p-4 flex flex-col mt-8 items-center gap-8 relative">
        {sidebarItems.map((item, i) => (
          <SidebarItem item={item} key={i} />
        ))}
      </ul>
      <div className="absolute bottom-0 mb-8 flex flex-col items-center gap-2 text-muted-foreground">
        <Image src={"/water-icon.svg"} alt="logo icon" width={32} height={32} />
        <div className="">Waterworks</div>
      </div>
    </div>
  )
}

export default Sidebar
