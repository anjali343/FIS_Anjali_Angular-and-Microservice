import { Component, OnInit } from '@angular/core';
import { admin } from '../admin';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:AdminService) {}
    
    aid: any;
    fid:any;
    fl:any;
    tl:any;

  

  ngOnInit(): void {
  }
  insertData1(){
    let admin1 : admin ={
      "airline_id":this.aid,
      "flight_id":this.fid,
      "from_location":this.fl,
      "to_location":this.tl


    }
    this.service.insertData(admin1);
  }



}
