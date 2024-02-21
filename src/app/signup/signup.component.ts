import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

interface studentdetails {
  firstname : string,
  lastname : string,
  email : string,
  age : number,
  address : string,
  password : string,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public routes : Router){}
  public firstname: string = ''
  public lastname: string = ''
  public email: string = ''
  public password: string = ''
  public age: number = 0
  public address: string = ''
  public message: string = ''

  public studentarray : studentdetails[] = []

  signup(){
    let studentobj = {
      firstname : this.firstname,
      lastname : this.lastname,
      email : this.email,
      age : this.age,
      password : this.password,
      address : this.address,
    }

   let verification = this.studentarray.push(studentobj)
    if(!verification){
      this.message = 'User Not Safe!'
    }else {
      localStorage.setItem('students', JSON.stringify(this.studentarray))
      console.log(this.studentarray);
      this.routes.navigate(['/signin'])
    }

  }
ngOnInit(){
  this.studentarray = JSON.parse(localStorage['students']) || null

  console.log(this.studentarray);

}


}
