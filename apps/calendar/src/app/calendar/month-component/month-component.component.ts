import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Month, Task, Week } from '../../models/day.model';

@Component({
  selector: 'app-month-component',
  templateUrl: './month-component.component.html',
  styleUrls: ['./month-component.component.css']
})
export class MonthComponentComponent implements OnInit {
  @Input() month: Month;
  @Input() tasks?: Task[];
  @Output() toggleEventDetailView = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.tasks?.length);
  }

  onDayClick(task?: Task): void {
    this.toggleEventDetailView.emit(task);
  }

  trackById(index: number, item: Week) {
    if(!item) return;
    return item.id
  }

}
