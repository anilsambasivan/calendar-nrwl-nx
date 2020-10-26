import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Day, Task } from '../../models/day.model';

@Component({
  selector: 'app-day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.css']
})
export class DayComponentComponent implements OnInit {
  @Input() day: Day;
  @Input() tasks?: Task[];
  @Output() toggleEventDetailView = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(item?: Task){
    // if user has not selected one of the existing event
    // then we are going to create a new event
    // send the selected ate for start
    item = item.date ? item : new Task({
      date: this.day.day.format('YYYY-MM-DD')
    });
    this.toggleEventDetailView.emit(new Task(item));
  }

  trackById(index: number, item: Task) {
    if(!item) return;
    return item.id
  }
}
