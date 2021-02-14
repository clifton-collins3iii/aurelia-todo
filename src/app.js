export class App {
  //message = 'Hello World!';
  constructor () {
    this.heading = 'My TodoS';
    this.todos = [];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription){
      this.todos.push({
        description: this.todoDescription,
        done: false});
      this.todoDescription='';
    }
  }

  removeTodo(todo){
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index,1);
    }
  }
}
