import { Component, OnInit } from '@angular/core';
import { DataService } from './dataService.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  characterList: any[] = [{ name: 'Yu Cheng Chang' }];
  isError: boolean = false;
  indexChoose: number;
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
  finishLast: Subject<any> = new Subject<any>();

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.loadAllCharacter(null);
    this.finishWait.subscribe((nextUrl) => {
      this.loadAllCharacter(nextUrl);
    });
    this.finishLast.subscribe(() => {
      this.characterList[1].description = "I am the first character!!!!";
      this.characterList[2].description = "I have no idea who am I";
      this.characterList[3].description = "I did not very understand about star war";
      this.characterList[4].description = "I am the " + "4th" + " character";
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
      } else {
        this.finishLast.next();
      }
    })
  }

  changeCharacter() {
    this.isError = false;
    try {
      this.characterChoose = this.characterList[this.indexChoose];
      this.dataService.getHomeWorld(this.characterChoose.homeworld).subscribe((response) => {
        this.homeworld = response;
      });

      this.films = [];
      let filmsCount = 0;
      for (let film of this.characterChoose.films) {
        this.dataService.getFilms(film).subscribe((response) => {
          this.films.push(response);
          filmsCount++;
          if (filmsCount == this.characterChoose.films.length) {
            this.films = this.films.sort(function (a, b) {
              return a.episode_id > b.episode_id ? 1 : a.episode_id < b.episode_id ? -1 : 0
            })
          }
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

    } catch (error) {
      this.selected = "";
      this.isError = true;
    }

  }

  changeDisplay(nextDisplay: { display: string, detail: string }) {
    this.selected = nextDisplay.display;
    if (this.selected == "film") {
      this.filmChoose = nextDisplay.detail;
    }
  }
}
