import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  
  password = '';
  isvalid='';
  Profile_id ='';

constructor(private routes:Router, private service:AdminService){}
 

  validateUser():void{
    
    if(this.Profile_id ==  '201'  &&  this.password=='xyz'){
      this.isvalid ="Authorized user";
      console.log("User is authenticated");
      this.routes.navigateByUrl("/display");
    }
    else{
      this.isvalid ="Not authorized";
      console.log("User is not authenticated");
      this.routes.navigateByUrl("/register");
    }
  }

}
