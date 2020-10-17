import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type = '';
  iconSource = '';

  constructor() { }

  ngOnInit(): void {
    this.iconSource = '../../../../assets/Icons/' + this.type + '.png';
  }

}
