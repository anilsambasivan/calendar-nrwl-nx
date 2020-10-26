import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsComponentComponent } from './event-details-component.component';

describe('EventDetailsComponentComponent', () => {
  let component: EventDetailsComponentComponent;
  let fixture: ComponentFixture<EventDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
