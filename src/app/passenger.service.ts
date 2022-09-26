

import { Injectable } from '@angular/core';
import { passenger } from 'src/passenger';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http:HttpClient) { }

  getUsers():any{
    return this.http.get("http://localhost:8084/passenger/all");
  }

  createUser(user:passenger):void{
    
  }

  ValidateUser(user:passenger): boolean {


    return false;
  }
}

