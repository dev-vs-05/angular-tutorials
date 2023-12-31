import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title = 'Event Binding';
  public isDisabled = true;
  public textInput: string = '';
  
  inputText(): boolean {
    return this.isDisabled = false;
  }

  dataDisplay(): string {
    return this.textInput;
  }

}
