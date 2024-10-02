import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAll(page = 1) {
    return this.http.get<Post[]>('http://localhost:8000/api/post?page='+page)
  }

  getByUser(username:string, page = 1) {
    return this.http.get<Post[]>(`http://localhost:8000/api/post/user/${username}?page=${page}`)
  }

  add(post:Post) {
    return this.http.post<Post>('http://localhost:8000/api/post', post);
  }
}
