import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';

const calendarRoutes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(calendarRoutes)
  ],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
