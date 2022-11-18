import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCambioContrasenaComponent } from './editar-cambio-contrasena.component';

describe('EditarCambioContrasenaComponent', () => {
  let component: EditarCambioContrasenaComponent;
  let fixture: ComponentFixture<EditarCambioContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCambioContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCambioContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
