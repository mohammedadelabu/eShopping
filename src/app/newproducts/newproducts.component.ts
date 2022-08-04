import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.css']
})
export class NewproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {name:"Ade", school:"OAU", address:"Osun", schoolFees: "52000", image: "/assets/shopping.jpg"},
    {name:"Bayo", school:"ABU", address:"Zaria", schoolFees: "50000", image: "/assets/tv.jpg"},
    {name:"Chidi", school:"OSU", address:"Ogun", schoolFees: "42000", image: "/assets/shopping.jpg"},
    {name:"Dapo", school:"KWASU", address:"Oyo", schoolFees: "42000", image: "/assets/shopping.jpg"},
    {name:"Esther", school:"DELSU", address:"Lagos", schoolFees: "32000", image: "/assets/shopping.jpg"},
    {name:"Funmi", school:"ABSU", address:"Kwara", schoolFees: "12000", image: "/assets/shopping.jpg"},
  ]

}
