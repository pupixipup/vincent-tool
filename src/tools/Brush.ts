import { DragEvent } from "react"
import Tool from "./Tool"

export default class Brush extends Tool {
  mouseDown: boolean = false
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.listen()
  }
  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }
  mouseUpHandler(e: any) {
    this.mouseDown = false
  }
  mouseDownHandler(e: any) {
    this.mouseDown = true
    this.ctx.beginPath()
    this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
  }
  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
      this.draw(x, y)
    }
  }
  draw(x: number, y: number) {}
}
