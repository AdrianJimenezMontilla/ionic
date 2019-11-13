import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  film;
  id;

  constructor(private http: HttpClient) {}

  getJSON(name: string) {
    return this.http.get(`./assets/${name}.json`);
  }

  sendFilm(film) {
    this.film = film;
  }

  getFilm() {
    return this.film;
  }

}
