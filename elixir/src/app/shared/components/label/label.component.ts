import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @ViewChild('labelWrapper') labelWrapper;
  @Input() labelType = '';

  labels = [
    {
      label : 'UI Design',
      color : 'green'
    },
    {
      label : 'Mockup',
      color : 'green'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.labelWrapper);
    // this.labels.map((x) => {
    //   if(x.label === this.labelType){
    //   this.labelWrapper.nativeElement.style.background = 'x.color';
    //   }
    // });
  }

}
