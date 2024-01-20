"use client"
import React from "react"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"

const ToggleThemeButton = ({ className }: { className?: ClassNameValue }) => {
  const { setTheme, themes } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "relative before:transition-[filter_opacity] before:opacity-0 hover:before:opacity-100 hover:before:bg-red before:rounded-xl before:absolute  hover:dark:before:bg-primary hover:before:bg-yellow-400 before:w-full before:h-full hover:before:blur-xl  before:pointer-events-none",
            className
          )}
        >
          <Sun className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme)}
            className="capitalize"
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleThemeButton
