import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesBoxComponent } from './recipies-box.component';

describe('RecipiesBoxComponent', () => {
  let component: RecipiesBoxComponent;
  let fixture: ComponentFixture<RecipiesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipiesBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipiesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
