export class Todo {
  constructor(
    private title:string,
    private description:string,
    private responsible:string,
    private completed?:boolean) {
    this.completed = false;
  }
  setToCompleted() {
    this.completed = true;
    return false;
  }
}
