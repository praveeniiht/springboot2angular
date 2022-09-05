import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: PostService) { }
  result :string="";
  tid:number=0;
  ngOnInit(): void {
  }

  deleteData(){
    this.service.deleteData(this.tid);
    this.result="Data Deleted...";
  }
}
