import { makeAutoObservable } from "mobx"

class CanvasState {
  canvas: HTMLCanvasElement | null = null
  constructor() {
    makeAutoObservable(this)
  }
  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas
  }
}

const instance = new CanvasState()
export default instance
