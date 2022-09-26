import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: AdminService) { }
  result :string="";
  fid:number=0;
  ngOnInit(): void {
  }

  deleteData(){
    this.service.deleteData(this.fid);
    this.result="Data Deleted...";
  }
}

