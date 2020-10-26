import { Injectable } from '@angular/core';
import { Task } from '../models/day.model';
import { TASKS } from '../constants/calendar.constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
    let tasks =  JSON.parse(localStorage.getItem('tasks')) as Task[];
    if(!tasks){
      localStorage.setItem('tasks', JSON.stringify(TASKS));
    }
   }

  getTasks(): Observable<Task[]> {
    return of(JSON.parse(localStorage.getItem('tasks')) as Task[]);
  }

  saveTask(task: Task): void {
    let tasks =  JSON.parse(localStorage.getItem('tasks')) as Task[];
    if(task.id){
      let indexToDelete = tasks.findIndex(i => i.id === task.id);
      tasks.splice(indexToDelete, 1)
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      task.id = tasks.length + 1;
      tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
}
