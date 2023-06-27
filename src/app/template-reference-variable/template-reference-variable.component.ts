import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // public displayData = '';
  public isDisabled = true;

  inputText(): void {
    this.isDisabled = false;
  }

  fetchData(): void {
    // console.log("Data fetched = " + this.displayData);
    // return this.displayData;
  } 

}
