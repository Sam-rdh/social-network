import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCardComponentComponent } from './friend-card-component.component';

describe('FriendCardComponentComponent', () => {
  let component: FriendCardComponentComponent;
  let fixture: ComponentFixture<FriendCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
