import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title = 'Angular Text Interpolation';
  public enterData = '';
  
  openPopup(): void {
    this.title = 'Angular Event Binding';
  }

  over(): void {
    this.title = 'Angular hover method';
  }

  out(): void {
    this.title = 'Angular out method';
  }

  textChange(): void {
    this.enterData = 'Text Changed';
  }

}
