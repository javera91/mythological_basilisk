import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BLegComponent } from './b-leg.component';

describe('BLegComponent', () => {
  let component: BLegComponent;
  let fixture: ComponentFixture<BLegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BLegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
