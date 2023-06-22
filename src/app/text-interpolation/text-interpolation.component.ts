import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.css']
})
export class TextInterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dummyText = 'Angular Tutorials';

  getNames():string {
    return "Hello Angular Method";
  }

  getValueWithData(data: number) {
    if(data === 1) {
      return "Hello from 1";
    } else {
      return "Hello from " + data;
    }
  }

  namesArr = ['Om', 'Raj', 'Divya'];

  empObj = {
    name : 'Raj',
    title: 'Software Engineer',
    salary: 50000,
    imgSrc: 'https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    alt: 'Car'
  }
}
