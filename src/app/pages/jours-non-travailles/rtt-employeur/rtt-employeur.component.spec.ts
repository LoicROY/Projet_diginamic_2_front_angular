import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RttEmployeurComponent } from './rtt-employeur.component';

describe('RttEmployeurComponent', () => {
  let component: RttEmployeurComponent;
  let fixture: ComponentFixture<RttEmployeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RttEmployeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RttEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
