import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Aléxia';
  age: number = 19;
  job = "Programmer";
  hobbies = ['correr', 'jogar', 'estudar']

  constructor() { }

  ngOnInit(): void {
  }

}
