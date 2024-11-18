import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {

  cityList:string [] = ['Pune', 'Hyderabad', 'Bangalore', 'Pune']; 

  isActive:boolean = true;
  togglling:boolean = true;

  num1:number = 0;
  num2:number= 0;

  

  ShowMe(){
    this.isActive = true;

  }

  HideMe(){
    this.isActive = false

  }

  toggleIn(){

    this.togglling = !this.togglling;


  }
}

