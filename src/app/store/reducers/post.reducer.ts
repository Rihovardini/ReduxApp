import { UserActions, PostAction } from '../actions/post.action';
import { PostState } from '..';
const initialState: PostState = {
  loaded: false,
  loading: false,
  posts: []
};

export const postReducer: (
  state: PostState,
  action: PostAction
) => PostState = (state: PostState = initialState, action: PostAction) => {
  switch (action.type) {
    case UserActions.LOAD_POSTS: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActions.LOAD_POST: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActions.ADD_POST: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActions.UPDATE_POST: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActions.REMOVE_POST: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActions.LOAD_POSTS_SUCCESS: {
      const posts = action.payload;
      return { ...state, posts, loading: false, loaded: true };
    }
    case UserActions.LOAD_POST_SUCCESS: {
      const post = action.payload;
      return { ...state, post, loading: false, loaded: true };
    }
    case UserActions.ADD_POST_SUCCESS: {
      const post = action.payload;
      return { ...state, post, loading: false, loaded: true };
    }
    case UserActions.UPDATE_POST_SUCCESS: {
      const post = action.payload;
      return { ...state, post, loading: false, loaded: true };
    }
    case UserActions.REMOVE_POST_SUCCESS: {
      const postId = action.payload;
      state.posts = state.posts.filter(el => el.id !== (+postId));
      return { ...state, loading: false, loaded: true };
    }
    default:
      return state;
  }
};
