import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieCardComponent } from './recipie-card.component';

describe('RecipieCardComponent', () => {
  let component: RecipieCardComponent;
  let fixture: ComponentFixture<RecipieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipieCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
