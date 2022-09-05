import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }
 
 
   getAllPosts(){
     //return this.httpClient.get("http://localhost:8080/posts/show");
     return this.httpClient.get("http://localhost:8089/posts/show");
   }
  
   insertPostData(post:any){
     this.httpClient.post("http://localhost:8089/posts/add",post)
     .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
   }

   searchDataById(id:number){
   return this.httpClient.get("http://localhost:8089/posts/search/"+id);
    
   }

   deleteData(id:number){
     this.httpClient.delete("http://localhost:8089/posts/delete/"+id)
     .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
   }
}
