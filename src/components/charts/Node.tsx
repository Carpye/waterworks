"use client"
import { DefaultNode, colors } from "@/config"
import { cn, getIconFromType } from "@/lib/utils"
import { MouseEvent, memo, useState } from "react"
import { Handle, NodeProps, NodeToolbar, Position } from "reactflow"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { toast } from "sonner"

const CustomNode = ({ data, id }: NodeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onNodeClick = (e: MouseEvent) => {
    if ((e.target! as HTMLDivElement).tagName !== "BUTTON") setIsOpen((v) => !v)
  }
  const onActionClick = () =>
    toast.success("Naciśnięto przycisk akcji dla węzła o id: " + id)
  return (
    <>
      <div
        className="relative bg-background min-w-[50px] rounded-xl border-2 border-zinc-700 dark:border-zinc-500 text-zinc-700 dark:text-zinc-500 py-2 px-8 flex justify-center items-center hover:text-primary hover:border-primary dark:hover:border-primary dark:hover:text-primary shadow-xl text-[.75em] gap-4"
        onClick={(e) => onNodeClick(e)}
      >
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 -top-12",
            isOpen ? "" : " hidden"
          )}
        >
          <Button
            id="action-btn"
            variant={"ghost"}
            className="rounded-xl relative border border-zinc-700 dark:border-zinc-500 px-2 h-full text-[10px] text-zinc-700 dark:text-zinc-500 shadow-xl"
            onClick={onActionClick}
          >
            Akcja
          </Button>
        </div>
        {getIconFromType(data.type)}
        {data.label}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="!bg-zinc-700 !dark:!bg-zinc-500 !w-4 !rounded-b-none !border-none !-z-10"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-zinc-700 !dark:!bg-zinc-500 !w-4 !rounded-t-none !border-none !-z-10"
      />
    </>
  )
}

export default memo(CustomNode)
