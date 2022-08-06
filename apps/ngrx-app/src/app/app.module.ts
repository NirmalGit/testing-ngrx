import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

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
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
