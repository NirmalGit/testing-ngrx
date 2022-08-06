import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PostsComponent }
];

export const PostRoutes = RouterModule.forChild(routes);
