import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioComponent } from './calendario.component';

describe('CalendarioComponent', () => {
  let component: FormularioUsuarioComponent;
  let fixture: ComponentFixture<CalendarioComponent>;

  (document).ready(function() {
    ("#basic-form").validate();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});