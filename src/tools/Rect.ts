import Tool from "./Tool"
import rect from "/public/rect.svg"
export default class Rect extends Tool {
  static toolName = "Rect"
  static icon = rect
  startX: number = 0
  startY: number = 0
  saved: string = ""
  mouseDown: boolean = false
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.toolName = Rect.toolName
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
    this.startX = e.pageX - e.target.offsetLeft
    this.startY = e.pageY - e.target.offsetTop
    this.saved = this.canvas.toDataURL()
  }
  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      const x = e.pageX - e.target.offsetLeft
      const y = e.pageY - e.target.offsetTop
      let width = x - this.startX
      let height = y - this.startY
      this.draw(this.startX, this.startY, width, height)
    }
  }
  draw(x: number, y: number, width: number, height: number) {
    const img = new Image()
    img.src = this.saved
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
      this.ctx.rect(x, y, width, height)
      this.ctx.fill()
      this.ctx.stroke()
    }
  }
}
