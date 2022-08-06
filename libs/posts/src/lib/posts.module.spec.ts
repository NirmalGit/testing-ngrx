import { TestBed } from '@angular/core/testing';
import { PostsModule } from './posts.module';

describe('PostsModule', () => {
  let pipe: PostsModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PostsModule] });
    pipe = TestBed.inject(PostsModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
