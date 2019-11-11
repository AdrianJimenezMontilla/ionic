import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  metros: number;
  centimetros: number;
  pulgadas: number;

  constructor() { }

  ngOnInit() {
    this.metros = 0;
    this.centimetros = 0;
    this.pulgadas = 0;
  }

  metrosTo() {
    this.centimetros = this.metros * 100;
    this.pulgadas = this.centimetros / 2.54;
  }

  centimetrosTo() {
    this.metros = this.centimetros / 100;
    this.pulgadas = this.centimetros / 2.54;
  }

  pulgadasTo() {
    this.centimetros = this.pulgadas * 2.54;
    this.metros = this.centimetros / 100;
  }

}
