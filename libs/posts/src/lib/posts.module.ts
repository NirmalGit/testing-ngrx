import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostRoutes } from './post.routing';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';


@NgModule({
  imports: [
    CommonModule,
    PostRoutes,
    StoreModule.forFeature('posts', reducer)
  ],
  declarations: [PostsComponent],
})
export class PostsModule { }
