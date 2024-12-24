import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  template: `
    <app-add-todo (todoAdded)="addTodoToList($event)"></app-add-todo>
    <div *ngFor="let todo of todos">
      <app-todo-item
        [todo]="todo"
        (delete)="deleteTodo($event)"
      ></app-todo-item>
    </div>
  `,
  styleUrl: "./todo-list.component.css",
})
export class TodoListComponent {
  @Input() todos: { id: number; title: string; completed: boolean }[] = [];
  // Add a new todo to the list
  addTodoToList(newTodoTitle: string) {
    const newTodo = {
      id: this.todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };
    this.todos.push(newTodo); // Add the new todo to the list
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
