import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'app';
  defaultCountry = 'usa';
  firstName: string = '';
  lastName: string;
  @ViewChild('myForm') form: NgForm;

  // onSubmit(form: NgForm){ // using the local reference template method
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.form);
  }
}
