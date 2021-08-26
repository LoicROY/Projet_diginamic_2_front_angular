import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoursNonTravaillesComponent } from './jours-non-travailles.component';

describe('JoursNonTravaillesComponent', () => {
  let component: JoursNonTravaillesComponent;
  let fixture: ComponentFixture<JoursNonTravaillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoursNonTravaillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoursNonTravaillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
