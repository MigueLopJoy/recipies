import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipiesComponent } from './user-recipies.component';

describe('UserRecipiesComponent', () => {
  let component: UserRecipiesComponent;
  let fixture: ComponentFixture<UserRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRecipiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
