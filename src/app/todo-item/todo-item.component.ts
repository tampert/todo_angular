import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-item",
  standalone: true,
  template: `
    <div>
      <p>{{ todo.title }}</p>
      <button (click)="onDelete()">Delete</button>
    </div>
  `,
  styleUrl: "./todo-item.component.css",
})
export class TodoItemComponent {
  @Input() todo!: { id: number; title: string; completed: boolean };
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.todo.id); // Emit the todo ID to the parent
  }
}
