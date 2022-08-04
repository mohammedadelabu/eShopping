import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-nav', // as HTML tag
  // selector: '[app-nav]', // as HTML attribute
  selector: '.app-nav', // as CSS class
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sitename: string = 'eShopping';
}
