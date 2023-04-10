import React from "react"
import styles from "./Toolbar.module.scss"
import Image from "next/image"
import eraser from "/public/eraser.svg"
import circle from "/public/circle.svg"
import rect from "/public/rect.svg"
import palette from "/public/palette.svg"
import line from "/public/line.svg"
import Brush from "@/tools/Brush"
import canvasState from "@/store/canvasState"
import Tool from "@/tools/Tool"
import toolState from "@/store/toolState"
import Rect from "@/tools/Rect"

const tools: any[] = [Brush, Rect]
type tool = typeof Tool
function Toolbar() {
  return (
    <div className={styles.toolbar}>
      {tools.map((Tool: tool) => {
        return (
          <button
            onClick={() => {
              if (canvasState.canvas) {
                toolState.setTool(new Tool(canvasState.canvas))
              }
            }}
            key={Tool.toolName}
            className={styles.toolbar_btn}
          >
            <Image
              src={Tool.icon}
              className={styles.toolbar_btn_icon}
              alt={Tool.toolName}
            />
          </button>
        )
      })}
    </div>
  )
}

export default Toolbar
