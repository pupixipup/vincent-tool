import React, { useEffect } from "react"
import styles from "./Canvas.module.scss"
import canvasState from "@/store/canvasState"
import toolState from "@/store/toolState"
import { observer } from "mobx-react-lite"
import Brush from "@/tools/Brush"

const Canvas = observer(() => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (canvasRef.current) {
      canvasState.setCanvas(canvasRef.current)
      toolState.setTool(new Brush(canvasRef.current))
    }
  }, [])
  return (
    <div className={styles.canvas}>
      <canvas ref={canvasRef} width={500} height={400}></canvas>
    </div>
  )
})

export default Canvas
