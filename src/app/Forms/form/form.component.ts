import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  
  userCredential: any = {
    email: '',
    password: '',
  };

  userData:any;

  onSubmitData(){
    debugger;
    this.userData = this.userCredential;

  }
}
