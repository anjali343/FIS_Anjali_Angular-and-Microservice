import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {admin} from 'src/app/admin' ;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpClient: any;

  constructor(private http:HttpClient) { }

  getUsers():any{
    return this.http.get("http://localhost:8081/admin/all");
  }

  


  insertData(admin1: admin): any {
    
    this.http.post("http://localhost:8081/admin/add",admin1)
    .subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    );

   
  }

  deleteData(id:number){
    this.http.post("http://localhost:8081/admin/delete",+id)
    .subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    );
    
  }

  searchDataByTrain(id:number){
    this.http.post("http://localhost:8081/admin/search",+id)
    .subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    );
    
     
    }


}



