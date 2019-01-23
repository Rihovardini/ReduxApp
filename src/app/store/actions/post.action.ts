import { Action } from '@ngrx/store';
import { Post } from 'src/app/models/Post.model';

export enum UserActions {
  LOAD_POSTS = '[Post] Load posts',
  LOAD_POSTS_SUCCESS = '[Post] Load posts success',

  LOAD_POST = '[Post] Load post',
  LOAD_POST_SUCCESS = '[Post] Load post success',

  ADD_POST = '[Post] Add post',
  ADD_POST_SUCCESS = '[Post] Add post success',

  REMOVE_POST = '[Post] Remove post',
  REMOVE_POST_SUCCESS = '[Post] Remove post success',

  UPDATE_POST = '[Post] Update post',
  UPDATE_POST_SUCCESS = '[Post] Update post success'
}

export class LoadPosts implements Action {
  readonly type = UserActions.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
  readonly type = UserActions.LOAD_POSTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class LoadPost implements Action {
  readonly type = UserActions.LOAD_POST;
  constructor(public payload: string) {}
}

export class LoadPostSuccess implements Action {
  readonly type = UserActions.LOAD_POST_SUCCESS;
  constructor(public payload: Post) {}
}

export class AddPost implements Action {
  readonly type = UserActions.ADD_POST;
  constructor(public payload: string) {}
}

export class AddPostSuccess implements Action {
  readonly type = UserActions.ADD_POST_SUCCESS;
  constructor(public payload: Post) {}
}

export class UpdatePost implements Action {
  readonly type = UserActions.UPDATE_POST;
  constructor(public payload: string) {}
}

export class UpdatePostSuccess implements Action {
  readonly type = UserActions.UPDATE_POST_SUCCESS;
  constructor(public payload: Post) {}
}

export class RemovePost implements Action {
  readonly type = UserActions.REMOVE_POST;
  constructor(public payload: string) {}
}

export class RemovePostSuccess implements Action {
  readonly type = UserActions.REMOVE_POST_SUCCESS;
  constructor(public payload: string) {}
}

export type PostAction =
  | LoadPosts
  | LoadPostsSuccess
  | LoadPost
  | LoadPostSuccess
  | AddPost
  | AddPostSuccess
  | UpdatePost
  | UpdatePostSuccess
  | RemovePost
  | RemovePostSuccess;
