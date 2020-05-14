import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders , HttpResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl='https://reqres.in/api/users';

  constructor(private httpClient:HttpClient) { }

  public getShare(){
    return this.httpClient.get(this.apiUrl);
  }

}

