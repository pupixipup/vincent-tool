import Tool from "./Tool"
import eraser from "/public/eraser.svg"
export default class Eraser extends Tool {
  static toolName = "Eraser"
  static icon = eraser
  mouseDown: boolean = false
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.toolName = Eraser.toolName
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
  draw(x: number, y: number) {
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
    this.ctx.strokeStyle = "#F6F6F6"
  }
}
