import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { CitaComponent } from './cita/cita.component';
import { CitasPendientesComponent } from './citas-pendientes/citas-pendientes.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { AdminComponent } from './admin/admin.component';
import { InicioSesionAdminComponent } from './inicio-sesion-admin/inicio-sesion-admin.component';
import { AdminCitasAgendadasComponent } from './admin-citas-agendadas/admin-citas-agendadas.component';
import { AdminProfesionalesComponent } from './admin-profesionales/admin-profesionales.component';
import { AdminConfiguracionesComponent } from './admin-configuraciones/admin-configuraciones.component';
import { EditarPerfilUsuarioComponent } from './editar-perfil-usuario/editar-perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    FormularioUsuarioComponent,
    FuncionesComponent,
    EspecialidadesComponent,
    CalendarioComponent,
    ProfesionalesComponent,
    CitaComponent,
    CitasPendientesComponent,
    InicioSesionComponent,
    AdminComponent,
    InicioSesionAdminComponent,
    AdminCitasAgendadasComponent,
    AdminProfesionalesComponent,
    AdminConfiguracionesComponent,
    EditarPerfilUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
