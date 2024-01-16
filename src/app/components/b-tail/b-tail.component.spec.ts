import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTailComponent } from './b-tail.component';

describe('BTailComponent', () => {
  let component: BTailComponent;
  let fixture: ComponentFixture<BTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BTailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
