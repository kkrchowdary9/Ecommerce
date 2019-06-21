import { Component, OnInit } from '@angular/core';
import { kkr } from '../interfaces/koteswar';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit , kkr {

  constructor() { }

  ngOnInit() {
  }
add()
{
  console.log("return me");
}
}
