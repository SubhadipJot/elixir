import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-organizer',
  templateUrl: './daily-organizer.component.html',
  styleUrls: ['./daily-organizer.component.scss']
})
export class DailyOrganizerComponent implements OnInit {

  items = [1,2,4,5,6,6,7,7,8,9]

  constructor() { }

  ngOnInit(): void {
  }

}
