import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { BoardOwnerCardComponent } from './components/board-owner-card/board-owner-card.component';
import { DailyOrganizerComponent } from './components/daily-organizer/daily-organizer.component';
import { InputComponent } from './components/input/input.component';
import { DailyOrganizerUserButtonComponent } from './components/daily-organizer-user-button/daily-organizer-user-button.component';
import { TaskSectionComponent } from './components/task-section/task-section.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { LabelComponent } from './components/label/label.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BoardOwnerCardComponent,
    DailyOrganizerComponent,
    InputComponent,
    DailyOrganizerUserButtonComponent,
    TaskSectionComponent,
    TaskCardComponent,
    LabelComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BoardOwnerCardComponent,
    DailyOrganizerComponent,
    InputComponent,
    TaskCardComponent
  ]
})
export class SharedModule { }
