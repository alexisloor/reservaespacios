import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearespacioComponent } from './crearespacio.component';

describe('CrearespacioComponent', () => {
  let component: CrearespacioComponent;
  let fixture: ComponentFixture<CrearespacioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearespacioComponent]
    });
    fixture = TestBed.createComponent(CrearespacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
