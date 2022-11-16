import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacioComponent } from './identificacio.component';

describe('IdentificacioComponent', () => {
  let component: IdentificacioComponent;
  let fixture: ComponentFixture<IdentificacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
