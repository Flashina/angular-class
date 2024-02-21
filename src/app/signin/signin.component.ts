import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// interface

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
constructor(public routes: Router){}

public email : string = '';
public password : string = '';
public message : string = ''

signIn(){
  let getstudents = JSON.parse(localStorage['students'])

  // console.log(getstudents);

  let user = getstudents.find((students : any,index : number) => this.email == students.email && this.password == students.password)
  if(!user) {
    this.message = "User not Availabe"
  }else {
    localStorage.setItem('currentUser', JSON.stringify(user))
    this.routes.navigate(['/dashboard'])
  }

  // console.log(user);


}

}
