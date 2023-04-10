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
  destroyEvents() {
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
  }
}
