import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../../models/day.model';
import { CalendarHelper } from '../../helpers/calendar.helper';

@Component({
  selector: 'app-event-tag-component',
  templateUrl: './event-tag-component.component.html',
  styleUrls: ['./event-tag-component.component.css']
})
export class EventTagComponentComponent implements OnInit {
  @Output() task = new EventEmitter<Task>();
  @Input() taskItem?: Task;

  public backColor: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(e: Event, item?: Task): void {
    this.task.emit(item);
    e.preventDefault();
  }

  getRandomBackColor(): string {
    return CalendarHelper.getRandomColor();
  }
}
