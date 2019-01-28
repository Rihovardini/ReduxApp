import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.module';
import { Post } from 'src/app/models/Post.model';
import {
  LoadPost,
  UpdatePost,
  AddPost
} from 'src/app/store/actions/post.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title: string;
  post: Post = new Post();
  loading = true;
  typeOfButton: boolean;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.params.subscribe(data => {
      if (data.id) {
        this.typeOfButton = true;
        this.store.dispatch(new LoadPost(data.id));
        this.store.select('posts').subscribe(state => {
          if (state.post) {
            this.post = state.post;
            this.loading = false;
          }
        });
      } else {
        this.loading = false;
        this.typeOfButton = false;
      }
    });
  }

  get typeOfPost () {
    return !this.typeOfButton ? 'Create' : 'Edit';
  }
  createPost() {
    this.store.dispatch(new AddPost(this.post));
  }

  editPost() {
    this.store.dispatch(new UpdatePost(this.post));
  }
}
