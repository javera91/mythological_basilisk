import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBackComponent } from './b-back.component';

describe('BBackComponent', () => {
  let component: BBackComponent;
  let fixture: ComponentFixture<BBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
