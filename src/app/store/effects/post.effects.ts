import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, catchError, mergeMap, map } from 'rxjs/operators';
import { PostState } from '..';
import * as fromPost from '../actions/post.action';
import * as fromError from '../actions/error.action';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class PostEffects {
  constructor(
    private action$: Actions,
    private store: Store<PostState>,
    private api: ApiService
  ) {}

  @Effect()
  loadPosts$: Observable<Action> = this.action$.pipe(
    ofType<fromPost.LoadPosts>(fromPost.UserActions.LOAD_POSTS),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap(() =>
      this.api.getPosts().pipe(
        map(posts => new fromPost.LoadPostsSuccess(posts)),
        catchError(err => of(new fromError.AddError(err.error)))
      )
    )
  );

  @Effect()
  deletePost$: Observable<Action> = this.action$.pipe(
    ofType<fromPost.RemovePost>(fromPost.UserActions.REMOVE_POST),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap(action =>
      this.api.deletePost(action.payload).pipe(
        map(post => {
          return new fromPost.RemovePostSuccess(action.payload);
        }),
        catchError(err => of(new fromError.AddError(err.error)))
      )
    )
  );
}
