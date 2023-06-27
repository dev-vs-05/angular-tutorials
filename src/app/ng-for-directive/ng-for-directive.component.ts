import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  templateUrl: './ng-for-directive.component.html',
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employees = ['Ram', 'Om', 'Raj', 'Jay', 'Bharat'];   //array
  public employeeObject = [
    {
      name: 'Rahul',
      salary: 40000,
      designation: 'Software Developer',
      country: 'USA'
    },
    {
      name: 'Rajan',
      salary: 30000,
      designation: 'Software Architect',
      country: 'UAE'
    },
    {
      name: 'Om',
      salary: 60000,
      designation: 'CEO',
      country: 'India'
    },
  ];

  refresh(): void {
    this.employeeObject = [
      {
        name: 'Rahul',
        salary: 40000,
        designation: 'Software Developer',
        country: 'USA'
      },
      {
        name: 'Rajan',
        salary: 30000,
        designation: 'Software Architect',
        country: 'UAE'
      },
      {
        name: 'Om',
        salary: 60000,
        designation: 'CEO',
        country: 'India'
      },
      {
        name: 'Raj',
        salary: 60000,
        designation: 'VP',
        country: 'India'
      },
      {
        name: 'Ganesh',
        salary: 90000,
        designation: 'AVP',
        country: 'India'
      },
      {
        name: 'Loki',
        salary: 160000,
        designation: 'Founder',
        country: 'India'
      },
    ];
  }

  refreshData(index: number, empObj: any): string {
    return empObj.name;
  }
  

}
