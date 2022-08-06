import { Component } from '@angular/core';

@Component({
  selector: 'testing-ngrx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }



  updateTitle(value: string) {
    // debugger;
    console.log(`updateTitle: ${value}`);
    this.title = value;
  }
}
