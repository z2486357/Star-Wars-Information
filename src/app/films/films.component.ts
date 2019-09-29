import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../dataService.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['../app.component.css']
})
export class FilmsComponent implements OnInit {

  @Input() filmChoose: any;
  characters:any[];
  planets:any[];
  starships:any[];
  vehicles:any[];
  species:any[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.characters=[];
    for(let character of this.filmChoose.characters){
      this.dataService.getFilms(character).subscribe((response)=>{
        this.characters.push(response);
      });
    }

    this.planets=[];
    for(let planet of this.filmChoose.planets){
      this.dataService.getFilms(planet).subscribe((response)=>{
        this.planets.push(response);
      });
    }

    this.starships=[];
    for(let starship of this.filmChoose.starships){
      this.dataService.getFilms(starship).subscribe((response)=>{
        this.starships.push(response);
      });
    }

    this.vehicles=[];
    for(let vehicle of this.filmChoose.vehicles){
      this.dataService.getFilms(vehicle).subscribe((response)=>{
        this.vehicles.push(response);
      });
    }

    this.species=[];
    for(let spe of this.filmChoose.species){
      this.dataService.getFilms(spe).subscribe((response)=>{
        this.species.push(response);
      });
    }
  }

}
