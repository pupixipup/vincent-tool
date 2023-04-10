import Tool from "@/tools/Tool"
import { makeAutoObservable } from "mobx"

class ToolState {
  tool: Tool | null = null
  constructor() {
    makeAutoObservable(this)
  }
  setTool(tool: Tool) {
    this.tool = tool
  }
}

const instance = new ToolState()
export default instance
