import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

const url = 'http://jsonplaceholder.typicode.com/posts';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(url);
  }

  savePost(post): Observable<Post> {
    return this.http.post<Post>(url, post, httpOptions);
  }
}
