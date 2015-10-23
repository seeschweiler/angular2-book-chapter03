export class Todo {
  title: string;
  description: string;
  responsible: string;
  completed: boolean;
  
  constructor(title, description, responsible) {
    this.title = title;
    this.description = description;
    this.responsible = responsible;
    this.completed = false;
  }
  
  setToCompleted() {
    this.completed = true;
    return false;
  }
}