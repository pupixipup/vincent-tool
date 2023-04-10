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
import palette from "/public/palette.svg"

const tools: any[] = [Brush, Rect, Circle, Eraser, Line]
type tool = typeof Tool

const Toolbar = observer(() => {
  const changeColor = (e: any) => {
    toolState.setFillColor(e.target.value)
  }
  const changeStrokeColor = (e: any) => {
    toolState.setStrokeColor(e.target.value)
  }
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
      <button
        title="Body color"
        style={{ border: `3px solid ${toolState?.fillColor}` }}
        className={styles.toolbar_btn}
      >
        <label htmlFor="color_pick">
          <Image
            className={styles.toolbar_btn_icon}
            src={palette}
            alt="Palette"
          />
        </label>
        <input
          onChange={changeColor}
          style={{ visibility: "hidden" }}
          id="color_pick"
          type="color"
        />
      </button>
      <button
        title="Body color"
        style={{ border: `3px solid ${toolState?.strokeColor}` }}
        className={styles.toolbar_btn}
      >
        <label htmlFor="stroke_color">
          <Image
            className={styles.toolbar_btn_icon}
            src={palette}
            alt="Palette"
          />
        </label>
        <input
          onChange={changeStrokeColor}
          style={{ visibility: "hidden" }}
          id="stroke_color"
          type="color"
        />
      </button>
    </div>
  )
})

export default Toolbar
