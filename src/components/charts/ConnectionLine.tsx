"use client"
import { getEdgeParams } from "@/lib/flowUtils"
import { ConnectionLineComponentProps, getBezierPath } from "reactflow"

const styles = {
  color: "#93c5fd",
  strokeWidth: 1.5,
}

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
        stroke={styles.color}
        strokeWidth={styles.strokeWidth}
        className="animated"
        d={edgePath}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#fff"
        r={3}
        stroke={styles.color}
        strokeWidth={styles.strokeWidth}
      />
    </g>
  )
}

export default ConnectionLine
