import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flow-control',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './flow-control.component.html',
  styleUrl: './flow-control.component.css'
})
export class FlowControlComponent {

  isDiv1Visible:boolean = true;
  isDiv2Visible:boolean = true;

  cityList:string [] = ['Pune', 'Bangalore', 'Hyderabad', 'Mumbai'];


  div1Hide(){
    this.isDiv1Visible = false;
  }
  div1Show(){
    this.isDiv1Visible = true;

  }
  div2Toggle(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }


}


