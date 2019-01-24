import { Post } from '../models/Post.model';

export interface PostState {
  loading: boolean;
  loaded: boolean;
  posts: Post[];
  post?: Post;
}
