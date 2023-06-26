import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // normal way of declaring classes
  // public myClasses = "success textbox-height";
  
  // using array
  // public myClasses = ['success', 'textbox-height'];  
  
  // using object.
  public myClasses = {
    'success': true,
    'textbox-height': this.textBoxStyle(),
  };
  
  // using function
  textBoxStyle(): boolean {
    return true;
  }

  public success = true;
  public error = true;
}
