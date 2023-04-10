import Tool from "./Tool"
import line from "/public/line.svg"
export default class Line extends Tool {
  static toolName = "Line"
  static icon = line
  mouseDown: boolean = false
  startX: number = 0
  startY: number = 0
  saved: string = ""
  currentX: number = 0
  currentY: number = 0
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.toolName = Line.toolName
    this.listen()
  }
  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
  }

  mouseDownHandler(e: any) {
    this.mouseDown = true
    this.currentX = e.pageX - e.target.offsetLeft
    this.currentY = e.pageY - e.target.offsetTop
    this.ctx.beginPath()
    this.ctx.moveTo(this.currentX, this.currentY)
    this.saved = this.canvas.toDataURL()
  }

  mouseUpHandler(e: any) {
    this.mouseDown = false
  }

  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }

  draw(x: number, y: number) {
    const img = new Image()
    img.src = this.saved
    img.onload = async () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.moveTo(this.currentX, this.currentY)
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
    }
  }
}
