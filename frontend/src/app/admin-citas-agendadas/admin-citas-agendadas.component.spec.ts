import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCitasAgendadasComponent } from './admin-citas-agendadas.component';

describe('AdminCitasAgendadasComponent', () => {
  let component: AdminCitasAgendadasComponent;
  let fixture: ComponentFixture<AdminCitasAgendadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCitasAgendadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCitasAgendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
