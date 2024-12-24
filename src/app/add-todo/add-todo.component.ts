import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-add-todo",
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <input type="text" [(ngModel)]="newTodo" placeholder="Add a new task" />
      <button (click)="addTodo()">Add</button>
    </div>
  `,
  styleUrl: "./add-todo.component.css",
})
export class AddTodoComponent {
  newTodo = "";

  // Declare an output event to notify the parent component
  @Output() todoAdded = new EventEmitter<string>();

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoAdded.emit(this.newTodo); // Emit the new todo to the parent
      this.newTodo = ""; // Clear the input field
    }
  }
}
