import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { DayComponentComponent } from './day-component/day-component.component';
import { MonthComponentComponent } from './month-component/month-component.component';
import { EventTagComponentComponent } from './event-tag-component/event-tag-component.component';
import { EventDetailsComponentComponent } from './event-details-component/event-details-component.component';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { WeekHeaderComponent } from './week-header/week-header.component';
import { WeekComponent } from './week/week.component';
import { FormsModule } from '@angular/forms';
import { UiModule } from '@greenway/ui';


@NgModule({
  declarations: [
    HeaderComponentComponent,
    DayComponentComponent,
    MonthComponentComponent,
    EventTagComponentComponent,
    EventDetailsComponentComponent,
    CalendarComponent,
    WeekHeaderComponent,
    WeekComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    UiModule,
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
