import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosdisponiblesComponent } from './espaciosdisponibles.component';

describe('EspaciosdisponiblesComponent', () => {
  let component: EspaciosdisponiblesComponent;
  let fixture: ComponentFixture<EspaciosdisponiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaciosdisponiblesComponent]
    });
    fixture = TestBed.createComponent(EspaciosdisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
