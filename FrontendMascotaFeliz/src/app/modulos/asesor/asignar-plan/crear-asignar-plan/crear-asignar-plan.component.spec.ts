import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsignarPlanComponent } from './crear-asignar-plan.component';

describe('CrearAsignarPlanComponent', () => {
  let component: CrearAsignarPlanComponent;
  let fixture: ComponentFixture<CrearAsignarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAsignarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAsignarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
