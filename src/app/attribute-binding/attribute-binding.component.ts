import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public carNamre = "Tesla's Upcoming Model";
  public imgSrc = 'https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
  
  // without using pixel format
  // imgWidth = 400;
  // imgHeight = 300

  // with using pixel format
  imgWidth = '530px';
  imgHeight = '380px'

  //****************** style binding *******************//

  // normal way
  public fontItalic = "font-style: italic; font-weight: 600;"

  // using object 
  public fontItalicObj = {
    'color': 'green',
    'font-style': 'italic', 
    'font-weight': 600,
  };  
}
