import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservashechasComponent } from './reservashechas.component';

describe('ReservashechasComponent', () => {
  let component: ReservashechasComponent;
  let fixture: ComponentFixture<ReservashechasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservashechasComponent]
    });
    fixture = TestBed.createComponent(ReservashechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
