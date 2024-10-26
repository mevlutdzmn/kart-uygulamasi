import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCardComponent } from './c-card.component';

describe('CCardComponent', () => {
  let component: CCardComponent;
  let fixture: ComponentFixture<CCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
