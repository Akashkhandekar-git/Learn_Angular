import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //Interpolation

  FirstName:string = "Akash";
  LastName:string = "Khandekar";

  bgColor:string = "bgColor";

  changeColor(){
    this.bgColor="changeColor";
  }

}
