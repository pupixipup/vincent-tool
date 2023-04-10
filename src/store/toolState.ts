import Tool from "@/tools/Tool"
import { makeAutoObservable } from "mobx"

class ToolState {
  tool: Tool | null = null
  fillColor: string = "#000000"
  strokeColor: string = "#000000"
  constructor() {
    makeAutoObservable(this)
  }
  setTool(tool: Tool) {
    this.tool = tool
  }
  setFillColor(color: string) {
    this.fillColor = color
    if (this.tool) {
      this.tool.fillColor = color
    }
  }
  setStrokeColor(color: string) {
    this.strokeColor = color
    if (this.tool) {
      this.tool.strokeColor = color
    }
  }
  setLineWidth(width: number) {
    if (this.tool) {
      this.tool.lineWidth = width
    }
  }
}

const instance = new ToolState()
export default instance
