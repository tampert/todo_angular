import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, TodoListComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-todo-list [todos]="todos"></app-todo-list>
  `,
  // templateUrl: './app.component.html',
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "to do angular";
  todos: { id: number; title: string; completed: boolean }[] = []; // Ensure the todos array is typed

  addTodoToList(newTodo: string) {
    const newTodoItem = {
      id: this.todos.length + 1,
      title: newTodo,
      completed: false,
    };
    this.todos.push(newTodoItem); // Add the new todo to the list
  }
}
