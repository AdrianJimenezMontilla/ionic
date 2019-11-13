import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-films',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  films;
  i;
  click: boolean;
  


  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getJSON('films').subscribe(
      data => {
        this.films = data;
        console.log(data);
      },
      err => console.log(err)
    );
  }


  muestraDetalles(title: string) {
    this.i = this.films.findIndex(item => item.title == title)
    this.click = !this.click;
  }
  

}
