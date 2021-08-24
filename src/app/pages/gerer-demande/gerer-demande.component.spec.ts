import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererDEmandeComponent } from './gerer-demande.component';

describe('GererDEmandeComponent', () => {
  let component: GererDEmandeComponent;
  let fixture: ComponentFixture<GererDEmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererDEmandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererDEmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
