import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-reg',
  templateUrl: './reactive-reg.component.html',
  styleUrls: ['./reactive-reg.component.css']
})
export class ReactiveRegComponent implements OnInit {
  reactiveForm: FormGroup;
  // searchValue: string = 'iPhone';
  searchValue: string = '';


  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),

    })
  }

  products = [
    {name: "Mohammed", school: "OAU", age: 25, color: "black", image:"../../assets/iphone.jpg"},
    {name: "Naheem", school: "ABU", age: 24, color: "white", image:"../../assets/laptop.jpg"},
    {name: "Chidera", school: "OSU", age: 22, color: "black", image:"../../assets/new-lap.jpg"},
    {name: "Robert", school: "AAU", age: 24, color: "green", image:"../../assets/refrigerator.jpg"},
    {name: "Patrick", school: "BAU", age: 35, color: "black", image:"../../assets/tv.jpg"}
  ];

  changeSearchValue(eventData: Event){
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value


  }

  onSubmit(){
    console.log(this.reactiveForm)
  }

}
