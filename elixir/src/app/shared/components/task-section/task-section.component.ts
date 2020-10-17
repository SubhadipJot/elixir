import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-section',
  templateUrl: './task-section.component.html',
  styleUrls: ['./task-section.component.scss']
})
export class TaskSectionComponent implements OnInit {

  @Input() taskType = '';
  iconSource = '../../../../assets/Icons/';

  constructor() { }

  ngOnInit(): void {
    if (this.taskType === 'Due Soon') {
      this.iconSource += 'duesoon.png';
    } else if (this.taskType === 'In Progress') {
      this.iconSource += 'inprogress.png';
    } else if (this.taskType === 'Done') {
      this.iconSource += 'done.png';
    }
  }

}
