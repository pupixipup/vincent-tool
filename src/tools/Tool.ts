export default class Tool {
  static toolName = "Tool"
  static icon = ""
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  icon!: string
  toolName!: string
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")!
    this.destroyEvents()
  }

  set fillColor(color: string) {
    this.ctx.fillStyle = color
  }
  set strokeColor(color: string) {
    this.ctx.strokeStyle = color
  }
  set lineWidth(width: number) {
    this.ctx.lineWidth = width
  }
  destroyEvents() {
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
  }
}
