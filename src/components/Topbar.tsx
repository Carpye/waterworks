"use client"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

const Topbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex justify-between items-center px-8 py-4 relative rounded-b-xl">
      <div className="flex items-center justify-center gap-8">
        <TopbarButton name="Home" href="/" />
        <TopbarButton name="Home" href="/infrastruktura" />
        <TopbarButton name="Home" href="/" />
      </div>
      <div className="flex justify-center items-center">
        <button className="w-full flex items-center pr-2 gap-4 text-zinc-800 relative">
          <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center text-zinc-600 transition-colors">
            <Home />
          </div>
        </button>
      </div>
    </div>
  )
}

interface TopbarButtonProps {
  name?: string
  href: string
}

function TopbarButton({ name, href }: TopbarButtonProps) {
  return (
    <Link href={href} passHref>
      <button className="w-full flex items-center pr-2 gap-4 text-zinc-800 relative before:hover:w-full before:w-0 before:bg-white before:h-full before:absolute before:transition-all after:duration-1000 before:rounded-xl before:-z-10 before:translate-x-2">
        <div className="w-12 h-12 bg-white rounded-xl flex justify-center items-center text-zinc-600 transition-colors">
          <Home />
        </div>
        {name}
      </button>
    </Link>
  )
}

export default Topbar
