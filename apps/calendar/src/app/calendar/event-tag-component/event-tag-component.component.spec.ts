import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTagComponentComponent } from './event-tag-component.component';

describe('EventTagComponentComponent', () => {
  let component: EventTagComponentComponent;
  let fixture: ComponentFixture<EventTagComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTagComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
