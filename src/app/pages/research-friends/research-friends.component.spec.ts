import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFriendsComponent } from './research-friends.component';

describe('ResearchFriendsComponent', () => {
  let component: ResearchFriendsComponent;
  let fixture: ComponentFixture<ResearchFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
