import { Component, OnInit } from '@angular/core';
import { DataService } from './dataService.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  characterList: any[];
  homeworld: any;
  films: any[];
  species: any[];
  vehicles: any[];
  starships: any[];
  characterChoose: any;
  homeworldChoose: any;
  filmChoose: any;
  speciesChoose: any;
  vehicleChoose: any;
  starshipChoose: any;
  selected: string = "";
  finishWait: Subject<string> = new Subject<string>();

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.loadAllCharacter(null);
    this.finishWait.subscribe((nextUrl) => {
      this.loadAllCharacter(nextUrl);
    });
  }

  loadAllCharacter(url: string) {
    this.dataService.getAllCharacter(url).subscribe((response) => {
      if (!this.characterList) {
        this.characterList = response.results;
      } else {
        for (let character of response.results) {
          this.characterList.push(character);
        }
      }
      if (response.next != null) {
        this.finishWait.next(response.next);
      }
    })
  }

  changeCharacter() {
    this.dataService.getHomeWorld(this.characterChoose.homeworld).subscribe((response) => {
      this.homeworld = response;
    });

    this.films = [];
    for (let film of this.characterChoose.films) {
      this.dataService.getFilms(film).subscribe((response) => {
        this.films.push(response);
      });
    }

    this.species = [];
    for (let spe of this.characterChoose.species) {
      this.dataService.getSpecies(spe).subscribe((response) => {
        this.species.push(response);
      });
    }

    this.vehicles = [];
    for (let vehicle of this.characterChoose.vehicles) {
      this.dataService.getVehicles(vehicle).subscribe((response) => {
        this.vehicles.push(response);
      });
    }

    this.starships = [];
    for (let starship of this.characterChoose.starships) {
      this.dataService.getStarships(starship).subscribe((response) => {
        this.starships.push(response);
      });
    }
    this.selected = "character";
  }

  changeDisplay(nextDisplay: { display: string, detail: string }) {
    this.selected = nextDisplay.display;
    if (this.selected == "homeworld") {
      this.homeworldChoose = nextDisplay.detail;
    }
    if (this.selected == "film") {
      this.filmChoose = nextDisplay.detail;
    }
    if (this.selected == "species") {
      this.speciesChoose = nextDisplay.detail;
    }
    if (this.selected == "vehicle") {
      this.vehicleChoose = nextDisplay.detail;
    }
    if (this.selected == "starship") {
      this.starshipChoose = nextDisplay.detail;
    }
  }
}
