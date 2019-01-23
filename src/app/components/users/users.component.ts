import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import { AddError, RemoveError } from 'src/app/store/actions/error.action';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post.model';
import { LoadPost, LoadPosts, RemovePost } from 'src/app/store/actions/post.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public posts: Post[];
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(new LoadPosts());
    this.store.select('posts').subscribe(state => {
       this.posts = state.posts;
    });
  }

  deletePost(postId) {
   this.store.dispatch(new RemovePost(postId));
//    this.store.select('posts').subscribe(state => {
//     this.posts = state.posts;
//  });
  }
}
