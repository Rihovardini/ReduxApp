import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post.model';

@Injectable()
export class ApiService {
  private URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${this.URL}/${endpoint}`;
    return this.http.request(method, url, {
      body
    });
  }

  getPosts(): Observable<Post[]> {
    return this.request('GET', 'posts');
  }

  getPost(id): Observable<Post> {
    const endpoint = `posts/${id}`;
    return this.request('GET', endpoint);
  }

  deletePost(postId): Observable<Post> {
    const endpoint = `posts/${postId}`;
    return this.request('DELETE', endpoint);
  }
}
