import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/day.model';
import * as moment from 'moment';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-event-details-component',
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.css']
})
export class EventDetailsComponentComponent implements OnInit {
  @Input() task: Task;
  @Output() save = new EventEmitter<Task>();

  constructor(private service: TaskService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.service.saveTask(new Task(this.task));
  }
}
