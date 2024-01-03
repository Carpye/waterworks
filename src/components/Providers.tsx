"use client"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { PropsWithChildren } from "react"
import { ReactFlowProvider } from "reactflow"
import { TooltipProvider } from "./ui/tooltip"

const Providers = ({
  children,
  themeProps,
}: PropsWithChildren<{ themeProps: ThemeProviderProps }>) => {
  return (
    <ReactFlowProvider>
      <ThemeProvider {...themeProps}>
        <Toaster richColors />
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </ReactFlowProvider>
  )
}

export default Providers
