import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {
  constructor(){}
  public firstname : string = ''
  public city : string = ''
  public condition : string = ''


  // const checkboxControl = new FormControl(false)

  // const isChecked : boolean = checkboxControl.value


  // ngOnInit() {
  //   this.checkboxControl.valueChanges.subscribe((value) => {
  //     console.log('Checkbox value changed:', value);
  //   });
  // }
}


