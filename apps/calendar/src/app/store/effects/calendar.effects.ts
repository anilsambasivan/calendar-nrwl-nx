import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CalendarActions from '../actions/calendar.actions'
import { map, switchMap } from 'rxjs/operators'
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/day.model';

@Injectable()
export class CalendarEffects {
    getTasks$ = createEffect(() => this.actions$.pipe(
        ofType(CalendarActions.getTasks),
        switchMap(() => {
            console.log('Action - CalendarActions.getTasks')
            return this.service.getTasks();
        }),
        map((tasks) => {
            console.log('map')
            return CalendarActions.getTasksSuccess({payload: tasks});
        })
    ));

    constructor(private actions$: Actions, private service: TaskService) {}
}

export const calendarEffects: any[] = [CalendarEffects];