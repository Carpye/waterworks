"use client"
import { colors } from "@/config"
import { getEdgeParams } from "@/lib/flowUtils"
import { ConnectionLineComponentProps, getBezierPath } from "reactflow"

function ConnectionLine({
  toX,
  toY,
  fromPosition,
  toPosition,
  fromNode,
}: ConnectionLineComponentProps) {
  if (!fromNode) {
    return null
  }

  const targetNode = {
    id: "connection-target",
    width: 1,
    height: 1,
    positionAbsolute: { x: toX, y: toY },
  }

  const { sx, sy } = getEdgeParams(fromNode, targetNode)
  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: fromPosition,
    targetPosition: toPosition,
    targetX: toX,
    targetY: toY,
  })

  return (
    <g>
      <path
        fill="none"
        stroke={colors.main.primary}
        strokeWidth={1.5}
        className="animated"
        d={edgePath}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#fff"
        r={3}
        stroke={colors.main.primary}
        strokeWidth={1.5}
      />
    </g>
  )
}

export default ConnectionLine
