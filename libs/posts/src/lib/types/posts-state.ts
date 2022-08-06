import { IPosts } from "./posts";

export interface IPostsState {
  isLoading: boolean;
  posts: IPosts[];
  error: string | null;
}
