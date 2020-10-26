import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Week, Task, Day } from '../../models/day.model';
import * as moment from 'moment';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css',
]
})
export class WeekComponent implements OnInit {
  @Input() week: Week;
  @Input() tasks?: Task[];
  @Output() toggleEventDetailView = new EventEmitter<Task>();


  constructor() {
  }

  ngOnInit(): void {
  }

  onDayClick(task?: Task): void {
    this.toggleEventDetailView.emit(task);
  }

  getTasksFortheDay(day: Day): Task[] {
    let result =  this.tasks?.filter(t => moment(t.date).format('DD-MM-YYYY') === (moment(day.day).format('DD-MM-YYYY')));
    return result;
  }

  trackById(index: number, item: Day) {
    if(!item) return;
    return item.id
  }
}
