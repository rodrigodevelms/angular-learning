import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfessionalComponent } from './employee-professional.component';

describe('EmployeeProfessionalComponent', () => {
  let component: EmployeeProfessionalComponent;
  let fixture: ComponentFixture<EmployeeProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
