import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css'
})
export class ApiIntegrationComponent {
  userData:any [] = [];

  constructor(private http:HttpClient){
    
    }

    getAllUser(){
      this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{
        this.userData = res;

      })

  }
}