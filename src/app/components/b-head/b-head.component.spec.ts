import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BHeadComponent } from './b-head.component';

describe('BHeadComponent', () => {
  let component: BHeadComponent;
  let fixture: ComponentFixture<BHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
