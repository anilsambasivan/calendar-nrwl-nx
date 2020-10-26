import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  @Output() today = new EventEmitter<void>();
  @Input() selectedDate: moment.Moment;

  constructor() { }

  ngOnInit(): void {
  }

  onToday(e: Event): void {
    this.today.emit();
    e.preventDefault();
  }

  onNext(e: Event): void {
    this.next.emit();
    e.preventDefault();
  }

  onPrevious(e: Event): void {
    this.previous.emit();
    e.preventDefault();
  }
}
