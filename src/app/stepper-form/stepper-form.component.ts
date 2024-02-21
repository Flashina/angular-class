import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper-form',
  standalone: true,
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './stepper-form.component.html',
  styleUrl: './stepper-form.component.css'
})
export class StepperFormComponent {
  constructor(public formbuilder: FormBuilder){}
  public form1 : boolean = true;
  public form2 : boolean = false;
  public form3 : boolean =  false;
  public formone = this.formbuilder.group({
    firstname : ['', [Validators.required,Validators.minLength(5)]],
  })

  public formTwo = this.formbuilder.group({
    email : ['', [Validators.email, Validators.required]],
  })

  public formthree = this.formbuilder.group({
    password : ['', [Validators.required]]
  })

  button1(){
    // console.log(this.formone);
    this.form1 = false;
    this.form2 = true;
  }
  button2(){
    // console.log(this.formone);
    this.form2 = false;
    this.form3 = true;
  }
  button3(){
    // console.log(this.formone);

    let alldetails = {
      firstname : this.formone.value['firstname'],
      email : this.formTwo.value['email'],
      password : this.formthree.value['password'],
    };
    console.log(alldetails);

  }
}
