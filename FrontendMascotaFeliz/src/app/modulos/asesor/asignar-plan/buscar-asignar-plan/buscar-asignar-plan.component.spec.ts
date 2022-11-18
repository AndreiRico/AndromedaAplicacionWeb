import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAsignarPlanComponent } from './buscar-asignar-plan.component';

describe('BuscarAsignarPlanComponent', () => {
  let component: BuscarAsignarPlanComponent;
  let fixture: ComponentFixture<BuscarAsignarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAsignarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAsignarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
