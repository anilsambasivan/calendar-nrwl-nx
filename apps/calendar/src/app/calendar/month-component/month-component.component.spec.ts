import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthComponentComponent } from './month-component.component';

describe('MonthComponentComponent', () => {
  let component: MonthComponentComponent;
  let fixture: ComponentFixture<MonthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
