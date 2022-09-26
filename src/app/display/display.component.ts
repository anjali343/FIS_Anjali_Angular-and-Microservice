import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  fullName="Angular Programming";
  all:any;

  constructor(private service:AdminService) { }

  ngOnInit(): void {
  }

  admin :any
  public display():void{
   
    this.service.getUsers()
    .subscribe( (response: any) =>{
      this.admin=response;
      console.log(response);
    }
    );
      
  }

}
