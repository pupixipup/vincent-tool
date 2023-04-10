import React, { useState } from "react"
import styles from "./Toolbar.module.scss"
import Image from "next/image"
import Brush from "@/tools/Brush"
import canvasState from "@/store/canvasState"
import Tool from "@/tools/Tool"
import toolState from "@/store/toolState"
import Rect from "@/tools/Rect"
import { observer } from "mobx-react-lite"
import Circle from "@/tools/Circle"
import Eraser from "@/tools/Eraser"
import Line from "@/tools/Line"

const tools: any[] = [Brush, Rect, Circle, Eraser, Line]
type tool = typeof Tool
const Toolbar = observer(() => {
  return (
    <div className={styles.toolbar}>
      {tools.map((Tool: tool) => {
        const activeClass =
          toolState.tool?.toolName === Tool.toolName
            ? styles.toolbar_btn_icon + " " + styles.active
            : styles.toolbar_btn_icon
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
              className={activeClass}
              alt={Tool.toolName}
            />
          </button>
        )
      })}
    </div>
  )
})

export default Toolbar
