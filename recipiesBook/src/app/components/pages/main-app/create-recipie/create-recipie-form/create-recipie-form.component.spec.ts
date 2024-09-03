import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipieFormComponent } from './create-recipie-form.component';

describe('CreateRecipieFormComponent', () => {
  let component: CreateRecipieFormComponent;
  let fixture: ComponentFixture<CreateRecipieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecipieFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRecipieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
