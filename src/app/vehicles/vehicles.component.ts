import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['../app.component.css']
})
export class VehiclesComponent implements OnInit {
  @Input() vehicleChoose: any;

  constructor() { }

  ngOnInit() {
    console.log(this.vehicleChoose)
  }

}
