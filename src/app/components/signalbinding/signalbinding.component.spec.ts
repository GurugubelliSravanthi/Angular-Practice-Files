import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalbindingComponent } from './signalbinding.component';

describe('SignalbindingComponent', () => {
  let component: SignalbindingComponent;
  let fixture: ComponentFixture<SignalbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalbindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
