import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor(private service:PostService) { }
 posts: any
   getAllPosts(){
    this.service.getAllPosts()
    .subscribe( response =>{
      this.posts=response;
      console.log(response);
    }
    );
  }

}
