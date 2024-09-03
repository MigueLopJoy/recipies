import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesNavComponent } from './recipies-nav.component';

describe('RecipiesNavComponent', () => {
  let component: RecipiesNavComponent;
  let fixture: ComponentFixture<RecipiesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipiesNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipiesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
