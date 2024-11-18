import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structure-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structure-directive.component.html',
  styleUrl: './structure-directive.component.css'
})
export class StructureDirectiveComponent {

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
