import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostRoutes } from './post.routing';

@NgModule({
  imports: [
    CommonModule,
    PostRoutes
  ],
  declarations: [PostsComponent],
})
export class PostsModule { }
