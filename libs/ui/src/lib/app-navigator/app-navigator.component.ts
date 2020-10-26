import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'greenway-app-navigator',
  templateUrl: './app-navigator.component.html',
  styleUrls: ['./app-navigator.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppNavigatorComponent implements OnInit {
  @Output() appClick = new EventEmitter<Event>();
  public showAppLauncher: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onAppClick(e: Event) {
    this.appClick.emit(e);
    e.preventDefault();
  }

  onLauncherClick(e: Event) {
    this.showAppLauncher = !this.showAppLauncher;
    e.preventDefault();
  }
}
