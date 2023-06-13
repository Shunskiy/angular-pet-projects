import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

export interface ITask {
  $id: number,
  complete: boolean,
  task: string,
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private data: ITask[] = [
    {
      $id: 1,
      complete: false,
      task: "Eat"
    },
    {
      $id: 2,
      complete: false,
      task: "Work"
    },
    {
      $id: 3,
      complete: false,
      task: "Sleep"
    },
  ];
  private taskLength = this.data.length

  constructor() {
    const localTasks = localStorage.getItem("todo");
    if (localTasks) {
      this.data = JSON.parse(localTasks);
      this.taskLength = this.data.length;
    }
  }

  getTasks(): Observable<ITask[]> {
    return of(this.data);
  }

  updateTasks(taskId: number, complete: boolean) {
    const taskToUpdate = this.data.find(item => item.$id === taskId);
    if (taskToUpdate) {
      taskToUpdate.complete = !complete;
    }
    localStorage.setItem("todo", JSON.stringify(this.data));
  }

  addTask(task: string) {
    this.data.push({$id: this.taskLength + 1, task: task, complete: false})
    this.taskLength++
    localStorage.setItem("todo", JSON.stringify(this.data));
  }
}
