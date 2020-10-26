import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavigatorComponent } from './app-navigator/app-navigator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppNavigatorComponent],
  exports: [AppNavigatorComponent],
})
export class UiModule {}
