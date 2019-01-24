import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { Post } from 'src/app/models/Post.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import { PostState } from '../store';
import { state } from '@angular/animations';

@Injectable()
export class ApiService {
  private URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

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

  getPost(id: string): Observable<Post> {
    let post: any;
    this.store.select('posts').subscribe(state => {
      if (state.posts.length) {
        [post] = state.posts.filter(el => el.id === +id);
        post = of(post);
      } else {
        post = this.request('GET', `posts/${id}`);
      }
    });
    return post;
  }

  createPost(post: Post) {
    return this.request('POST', `posts`, post);
  }

  putPost(post: Post) {
    return this.request('PUT', `posts/${post.id}`, post);  }

  deletePost(postId): Observable<Post> {
    const endpoint = `posts/${postId}`;
    return this.request('DELETE', endpoint);
  }
}
