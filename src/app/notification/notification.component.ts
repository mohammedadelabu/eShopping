import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  // template: `<div class="notification-div">
  // using bootstrap
  // template: `<div class="alert alert-success" [hidden]="displayNotification" (click)="close()">
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: displayNotification}" (click)="close()">
    <p>This website uses cookies for better experience</p>
  <div class="close"><button class="btn">X</button></div>
  </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 10px; text-align: center;}",
            "p{font-size: 16px;}",
            ".close{float: right; margin-top: -55px;}",
            ".fadeOut{visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification: boolean = false;

  close(){
    this.displayNotification = true;
  }
}
