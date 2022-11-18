import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenmeComponent } from './contactenme.component';

describe('ContactenmeComponent', () => {
  let component: ContactenmeComponent;
  let fixture: ComponentFixture<ContactenmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactenmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactenmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
