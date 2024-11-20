import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APICallsService {

  apiUrl:string = "https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) {}
  
  getAllData(){

    debugger;
    return this.http.get(`${this.apiUrl}posts`);

  }
}
