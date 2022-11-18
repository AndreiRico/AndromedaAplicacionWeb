import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsignarPlanComponent } from './editar-asignar-plan.component';

describe('EditarAsignarPlanComponent', () => {
  let component: EditarAsignarPlanComponent;
  let fixture: ComponentFixture<EditarAsignarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAsignarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAsignarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
