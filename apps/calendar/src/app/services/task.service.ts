import { Injectable } from '@angular/core';
import { Task } from '../models/day.model';
import { TASKS } from '../constants/calendar.constants';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    const tasks =  JSON.parse(localStorage.getItem('tasks')) as Task[];
    if(!tasks){
      localStorage.setItem('tasks', JSON.stringify(TASKS));
    }
   }

  getTasks(): Observable<Task[]> {
    try {
      return this.http.get<Task[]>(this.baseUrl + '/tasks');
    } catch (error) {
      throwError(error);
    }
  }

  saveTask(task: Task): void {
    const tasks =  JSON.parse(localStorage.getItem('tasks')) as Task[];
    if(task.id){
      const indexToDelete = tasks.findIndex(i => i.id === task.id);
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
