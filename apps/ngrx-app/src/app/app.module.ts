import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('@testing-ngrx/posts').then(m => m.PostsModule)
  }
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, StoreModule.forRoot({}), StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: false,
    autoPause: true,
    features: {
      pause: false,
      lock: true,
      persist: true
    }
  }), RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
