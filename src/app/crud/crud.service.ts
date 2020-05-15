import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Shares } from './shares';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://https://reqres.in/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // create(product): Observable<Shares> {
  //   return this.httpClient.post<Shares>(this.apiServer + '/users/', JSON.stringify(product), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }  
  // getById(id): Observable<Shares> {
  //   return this.httpClient.get<Shares>(this.apiServer + '/users/' + id)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  getAll(): Observable<Shares[]> {
    return this.httpClient.get<Shares[]>(this.apiServer + '/users')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // update(id, product): Observable<Shares> {
  //   return this.httpClient.put<Shares>(this.apiServer + '/users/' + id, JSON.stringify(product), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  // delete(id){
  //   return this.httpClient.delete<Shares>(this.apiServer + '/users/' + id, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}