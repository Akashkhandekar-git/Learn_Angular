import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { APICallsService } from '../../Service/api-calls.service';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css',
})
export class ApiIntegrationComponent {
  userData: any[] = [];

  constructor(private getApi: APICallsService) {}

  getAllUser() {
    this.getApi.getAllData().subscribe((res: any) => {
      this.userData = res;
    });
  }
}
