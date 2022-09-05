import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:PostService) { }
  tid:any;
  ttitle:any;
  tauthor:any;
  
  ngOnInit(): void {
  }

  insertData(){

   
   let post : Post = {
      "pid":this.tid,
      "title":this.ttitle,
      "author":this.tauthor
    }
   this.service.insertPostData(post);
  }
}
