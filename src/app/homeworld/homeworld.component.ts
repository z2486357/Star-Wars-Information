import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homeworld',
  templateUrl: './homeworld.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeworldComponent implements OnInit {
  @Input() homeworldChoose: any;
  constructor() { }

  ngOnInit() {
  }

}
