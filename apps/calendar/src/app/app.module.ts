import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponentComponent } from './calendar/header-component/header-component.component';
// import { DayComponentComponent } from './calendar/day-component/day-component.component';
// import { MonthComponentComponent } from './calendar/month-component/month-component.component';
// import { EventTagComponentComponent } from './calendar/event-tag-component/event-tag-component.component';
// import { EventDetailsComponentComponent } from './calendar/event-details-component/event-details-component.component';
// import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { CalendarModule } from './calendar/calendar.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
