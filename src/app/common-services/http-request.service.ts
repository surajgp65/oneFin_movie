import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponse } from '../models/api-model';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}
  // baseURL = environment.baseUrl;
  // baseURL = '';
  // function for CRUD
  request(
    requestType: string,
    requestURL: string,
    requestBody: any
  ): Observable<APIResponse> | any {
    // for get request..
    if (requestType === 'get') {
      return this.http.get<APIResponse>(requestURL);
    }

    // for post request(adding)..
    if (requestType === 'post') {
      return this.http.post<APIResponse>(requestURL, requestBody);
    }

    // for put request(updating with all required values)..
    if (requestType === 'put') {
      return this.http.put<APIResponse>(requestURL, requestBody);
    }

    // for patch request(updating with specific values)..
    if (requestType === 'patch') {
      return this.http.patch<APIResponse>(requestURL, requestBody);
    }

    // for delete request..
    if (requestType === 'delete') {
      return this.http.delete<APIResponse>(requestURL);
    }
  }
}
