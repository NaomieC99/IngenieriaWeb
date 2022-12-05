import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { CitaComponent } from './cita/cita.component';
import { CitasPendientesComponent } from './citas-pendientes/citas-pendientes.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { AdminComponent } from './admin/admin.component';
import { InicioSesionAdminComponent } from './inicio-sesion-admin/inicio-sesion-admin.component';
import { AdminCitasAgendadasComponent } from './admin-citas-agendadas/admin-citas-agendadas.component';
import { AdminConfiguracionesComponent } from './admin-configuraciones/admin-configuraciones.component';
import { AdminProfesionalesComponent } from './admin-profesionales/admin-profesionales.component';
import { EditarPerfilUsuarioComponent } from './editar-perfil-usuario/editar-perfil-usuario.component';



const routes: Routes = [ 
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'formulario-usuario', component: FormularioUsuarioComponent},
  { path: 'funciones', component: FuncionesComponent},
  { path: 'especialidades', component: EspecialidadesComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'profesionales', component: ProfesionalesComponent},
  { path: 'cita', component: CitaComponent},
  { path: 'citas-pendientes', component: CitasPendientesComponent},
  { path: 'inicio-sesion', component: InicioSesionComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'inicio-sesion-admin', component: InicioSesionAdminComponent},
  { path: 'admin-citas-agendadas', component: AdminCitasAgendadasComponent},
  { path: 'admin-configuraciones', component: AdminConfiguracionesComponent},
  { path: 'admin-profesionales', component: AdminProfesionalesComponent},
  { path: 'editar-perfil-usuario', component: EditarPerfilUsuarioComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
