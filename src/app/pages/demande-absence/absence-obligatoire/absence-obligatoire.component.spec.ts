import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceObligatoireComponent } from './absence-obligatoire.component';

describe('AbsenceObligatoireComponent', () => {
  let component: AbsenceObligatoireComponent;
  let fixture: ComponentFixture<AbsenceObligatoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsenceObligatoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenceObligatoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
