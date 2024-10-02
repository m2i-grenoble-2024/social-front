import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInListComponent } from './post-in-list.component';

describe('PostInListComponent', () => {
  let component: PostInListComponent;
  let fixture: ComponentFixture<PostInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostInListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
