import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selected: string = 'dashboard';

  constructor() {}

  ngOnInit(): void {}
}
