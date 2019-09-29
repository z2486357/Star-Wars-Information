import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['../app.component.css']
})
export class StarshipsComponent implements OnInit {
  @Input() starshipChoose: any;

  constructor() { }

  ngOnInit() {
    console.log(this.starshipChoose)
  }

}
