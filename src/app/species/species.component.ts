import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['../app.component.css']
})
export class SpeciesComponent implements OnInit {
  @Input() speciesChoose: any;

  constructor() { }

  ngOnInit() {
    console.log(this.speciesChoose)
  }

}
