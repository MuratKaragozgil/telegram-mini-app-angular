import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  // send request to backend about data
  sendData(data: any) {
    // Get website url
    const url = window.location.href;
    // post data to backend
    this.httpClient.post(url, data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
