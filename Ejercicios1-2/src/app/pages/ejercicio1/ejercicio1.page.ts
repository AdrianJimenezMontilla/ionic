import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {

  aux: number;
  min: number;
  max: number;
  value: number;

  constructor() { }

  ngOnInit() {
    this.aux = 0;
    this.min = 0;
    this.max = 0;
    this.value = 0;
  }

  maxMin() {
    if (this.value == this.max) {
      this.aux = 2;
      this.value = this.min;
    } else {
      this.aux = 1;
      this.value = this.max;
    }
  }

  generate() {
    this.value = +this.min + Math.floor(Math.random() * (this.max - this.min + 1));
    this.aux = 0;
  }

}
