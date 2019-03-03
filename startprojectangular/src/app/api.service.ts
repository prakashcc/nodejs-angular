import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

//const apiUrl = "http:localhost:3000/users/getdetails";

@Injectable(
)
export class ApiService {

  constructor(private http: HttpClient) { }

  getServers(){
   return this.http.get('http://localhost:3000/users/getdetails');
  }



}
