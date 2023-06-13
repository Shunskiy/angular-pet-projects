import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ITask, TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks!: ITask[];
  taskCopy: string = ""

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTasks().subscribe(item => this.tasks = item)
  }

  updateTask(taskId: number, complete: boolean) {
    this.todoService.updateTasks(taskId, complete);
    this.todoService.getTasks();
  }

  addTask(inputCopy: string) {
    this.todoService.addTask(this.taskCopy)
  }
}
