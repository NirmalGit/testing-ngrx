import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IPosts } from '../types/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getPosts(): Observable<IPosts[]> {
    const posts = [
      { id: '1', title: 'First post' },
      { id: '2', title: 'Second post' },
      { id: '3', title: 'Third post' }
    ];

    return of(posts).pipe(delay(2000));
  }

  addPosts(name: string): Observable<IPosts> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, body, options)
      .map(this.handleResponse)
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


  constructor() { }
}
