import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCambioContrasenaComponent } from './crear-cambio-contrasena.component';

describe('CrearCambioContrasenaComponent', () => {
  let component: CrearCambioContrasenaComponent;
  let fixture: ComponentFixture<CrearCambioContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCambioContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCambioContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
