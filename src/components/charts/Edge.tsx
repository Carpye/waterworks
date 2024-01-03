"use client"
import { getEdgeParams } from "@/lib/flowUtils"
import { useCallback, useEffect } from "react"
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
  useStore,
} from "reactflow"

function Edge({
  id,
  targetX,
  targetY,
  markerEnd,
  style,
  selected,
  source,
  sourceX,
  sourceY,
  target,
  targetPosition,
}: EdgeProps) {
  const { setEdges } = useReactFlow()
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  )
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  )

  useEffect(() => {
    setEdges((edges) =>
      edges.map((edge) =>
        edge.id === id && selected
          ? { ...edge, animated: true }
          : { ...edge, animated: false }
      )
    )
  }, [selected])

  if (!sourceNode || !targetNode) {
    return null
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    sourceNode,
    targetNode
  )

  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  })

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={selected ? { ...style, stroke: "#788dfc" } : style}
        markerEnd={markerEnd}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(
              ${sx > tx ? tx + 0 : tx - 30}px,
              ${sy < ty ? ty - 20 : ty + 10}px)`,
          }}
          className="absolute z-10 pointer-events-auto border border-zinc-100 dark:border-zinc-900 turquoise:border-zinc-900 hover:border-[#fffff] rounded-xl px-1 text-[.5em] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
        >
          <span>Opis</span>
        </div>
      </EdgeLabelRenderer>
    </>
  )
}

export default Edge
