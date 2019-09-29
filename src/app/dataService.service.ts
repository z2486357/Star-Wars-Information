
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getAllCharacter(nextUrl: string) {
    let url: string = "https://swapi.co/api/people";
    if (nextUrl != null) {
      url = nextUrl;
    }
    return this.http.get<{ count: number, next: string, previous: string, results: any[] }>(url);
  }

  getCharacter(url:string){
    return this.http.get(url);
  }

  getHomeWorld(url:string){
    return this.http.get(url);
  }

  getFilms(url:string){
    return this.http.get(url);
  }

  getSpecies(url:string){
    return this.http.get(url);
  }

  getVehicles(url:string){
    return this.http.get(url);
  }

  getStarships(url:string){
    return this.http.get(url);
  }
}
