import { createReducer, on } from '@ngrx/store';
import { IPostsState } from '../types/posts-state';
import * as PostActions from './action';



const initialState: IPostsState = {
  isLoading: false,
  posts: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(
    PostActions.getPosts,
    (state) => ({ ...state, isLoading: true }),
  ),
);