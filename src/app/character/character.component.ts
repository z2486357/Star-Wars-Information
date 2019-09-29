import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['../app.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() characterChoose: any;
  @Input() homeworld: any;
  @Input() films: any[];
  @Input() species: any[];
  @Input() vehicles: any[];
  @Input() starships: any[];
  @Output() changeDisplay: EventEmitter<{ display: string, detail: string }> = new EventEmitter<{ display: string, detail: string }>();

  constructor() { }

  ngOnInit() {
  }

  homeworldDisplay(homeworld: any) {
    this.changeDisplay.next({ display: "homeworld", detail: homeworld })
  }

  filmDisplay(film: any) {
    this.changeDisplay.next({ display: "film", detail: film })
  }

  speciesDisplay(species: any) {
    this.changeDisplay.next({ display: "species", detail: species })
  }

  vehicleDisplay(vehicle: any) {
    this.changeDisplay.next({ display: "vehicle", detail: vehicle })
  }

  starshipDisplay(starship: any) {
    this.changeDisplay.next({ display: "starship", detail: starship })
  }
}
