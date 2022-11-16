import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProductoservicioComponent } from './asignar-productoservicio.component';

describe('AsignarProductoservicioComponent', () => {
  let component: AsignarProductoservicioComponent;
  let fixture: ComponentFixture<AsignarProductoservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarProductoservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarProductoservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
