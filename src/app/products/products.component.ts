import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {id: 1, name:'Minimalist Watch', price: '109', color: 'Black', available: 'Available', images:'assets/watch.jpg'},
    {id: 2, name:'HiSense TV', price: '1509', color: 'White', available: 'Available', images:'/assets/tv.jpg'},
    {id: 3, name:'Apple iPhone', price: '2100', color: 'Black', available: 'Not Available', images:'/assets/iphone.jpg'},
    {id: 4, name:'LG Washing Machine', price: '524', color: 'Black', available: 'Available', images:'/assets/washing machine.jpg'},
    {id: 5, name:'LG Refrigerator', price: '2220', color: 'White', available: 'Not Available', images:'/assets/refrigerator.jpg'},
    {id: 6, name:'DELL Laptop', price: '1125', color: 'Black', available: 'Available', images:'/assets/laptop.jpg'}
  ]
}
