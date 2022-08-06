// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IPostsState } from "libs/posts/src/lib/types/posts-state";


export interface AppStateInterface {
  posts: IPostsState;
}