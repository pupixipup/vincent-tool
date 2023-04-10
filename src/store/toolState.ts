import { makeAutoObservable } from "mobx";

class ToolState {
  tool: string | null  = null;
  constructor() {
    makeAutoObservable(this);
  }
  setTool(tool: string) {
    this.tool = tool; 
  }
}

const instance = new ToolState();
export default instance;