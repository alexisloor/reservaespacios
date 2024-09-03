import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreareservaComponent } from './creareserva.component';

describe('CreareservaComponent', () => {
  let component: CreareservaComponent;
  let fixture: ComponentFixture<CreareservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreareservaComponent]
    });
    fixture = TestBed.createComponent(CreareservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
