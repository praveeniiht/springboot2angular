import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:PostService) { }
  tid: number=0;
  posts:any;
  ngOnInit(): void {
  }
  searchData(){
    this.service.searchDataById(this.tid)
    .subscribe( response =>{
      this.posts=response;
      console.log(response);
    }
    );
   
  }


}
