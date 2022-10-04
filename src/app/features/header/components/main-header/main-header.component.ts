import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gw-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  @Input() sidenav: any;

  constructor() {}

  ngOnInit(): void {}
}
