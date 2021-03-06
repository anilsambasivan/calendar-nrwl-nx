import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarHelper } from '../helpers/calendar.helper';
import { Month, Week, Task } from '../models/day.model';
import * as moment from 'moment';
import { CalendarFacade } from '../store/calendar.facade'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  public month: Month = new Month();
  public showEventDetails: boolean;
  public currentDate: moment.Moment;
  public tasks$: Observable<Task[]>;
  public selectedTask: Task = new Task();

  constructor(private service: CalendarFacade) {
    this.currentDate = moment();
    this.month = CalendarHelper.getCalendarMonth(this.currentDate);
  }

  ngOnInit(): void {
    this.service.getTasks();
    this.tasks$ = this.service.tasks$;
  }

  trackByFn(index: number, item: Week): number {
    if(!item) return;
    return item.id;
  }

  onDayClick(task?: Task): void {
    if(this.selectedTask.date === task.date && this.showEventDetails) {
      this.showEventDetails = false
    } else {
      this.showEventDetails = true
    }
    this.selectedTask = new Task(task);

  }

  onToday(): void {
    this.currentDate = moment();
    this.month = CalendarHelper.getCalendarMonth(this.currentDate);
  }

  onNext(): void {
    this.nextMonth();
  }

  onPrevious(): void {
    this.prevMonth();
  }

  public prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.month = CalendarHelper.getCalendarMonth(this.currentDate);
  }

  public nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.month = CalendarHelper.getCalendarMonth(this.currentDate);
  }
}
